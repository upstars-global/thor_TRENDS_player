#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { referenceGamesList } from './reference-games-list.js';

// Получаем путь к текущему скрипту и корню проекта
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Функция для проверки существования файла
function checkFileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    return false;
  }
}

// Функция для определения актуального файла с данными игр из App.vue
function getActiveDataFile() {
  const appVuePath = path.join(rootDir, 'src', 'App.vue');
  
  try {
    const content = fs.readFileSync(appVuePath, 'utf8');
    
    // Ищем импорт типа: import { gamesData, Game as GameData } from './gameDataSets/02.06'
    const importRegex = /import\s+{[^}]*gamesData[^}]*}\s+from\s+['"]\.\/gameDataSets\/([^'"]+)['"]/;
    const match = content.match(importRegex);
    
    if (match) {
      const fileName = match[1];
      console.log(`Обнаружен активный файл данных: ${fileName}.ts`);
      return fileName + '.ts';
    } else {
      console.warn('Не удалось найти импорт gamesData в App.vue, используем 02.06.ts по умолчанию');
      return '02.06.ts';
    }
  } catch (error) {
    console.error(`Ошибка при чтении App.vue: ${error.message}`);
    console.log('Используем 02.06.ts по умолчанию');
    return '02.06.ts';
  }
}

// Функция для парсинга и валидации структуры данных игр
async function parseAndValidateGamesData() {
  const activeFile = getActiveDataFile();
  const filePath = path.join(rootDir, 'src', 'gameDataSets', activeFile);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    const games = [];
    const srcValues = [];
    const auGameSlugs = [];
    let currentGame = null;
    
    // Построчный парсинг для точного извлечения данных
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Извлекаем name игры
      if (line.startsWith('name:')) {
        const nameMatch = line.match(/name:\s*['"]([^'"]*)['"]/);
        if (nameMatch) {
          currentGame = { name: nameMatch[1], line: i + 1 };
        }
      }
      
      // Извлекаем src игры
      if (line.startsWith('src:') && currentGame) {
        const srcMatch = line.match(/src:\s*['"]([^'"]*)['"]/);
        if (srcMatch) {
          currentGame.src = srcMatch[1];
          if (srcMatch[1] && srcMatch[1].trim() !== '') {
            games.push({ ...currentGame });
            srcValues.push(srcMatch[1]);
          }
          currentGame = null;
        }
      }
      
      // Извлекаем game_slug для региона AU
      if (line.includes('au:')) {
        // Ищем следующие строки для game_slug
        for (let j = i; j < Math.min(i + 5, lines.length); j++) {
          const auLine = lines[j].trim();
          if (auLine.startsWith('game_slug:')) {
            const auGameSlugMatch = auLine.match(/game_slug:\s*['"]([^'"]*)['"]/);
            if (auGameSlugMatch) {
              auGameSlugs.push(auGameSlugMatch[1]);
              break;
            }
          }
        }
      }
    }
    
    // Удаляем дубликаты src для проверки файлов
    const uniqueSrcValues = [...new Set(srcValues)];
    
    return {
      games,
      srcValues: uniqueSrcValues,
      auGameSlugs,
      activeFile
    };
  } catch (error) {
    console.error(`Ошибка при чтении файла ${activeFile}: ${error.message}`);
    return {
      games: [],
      srcValues: [],
      auGameSlugs: [],
      activeFile
    };
  }
}

// Функция для проверки дубликатов игр
function checkForDuplicates(games) {
  console.log('\n🔍 Проверка дубликатов игр...');
  
  // Подсчитываем ожидаемое количество каждой игры из эталонного списка
  const expectedCounts = {};
  referenceGamesList.forEach(game => {
    const normalizedName = game.toLowerCase().trim();
    expectedCounts[normalizedName] = (expectedCounts[normalizedName] || 0) + 1;
  });
  
  const srcCounts = {};
  const nameCounts = {};
  const invalidDuplicates = [];
  
  games.forEach((game, index) => {
    // Подсчитываем повторения по src
    if (srcCounts[game.src]) {
      srcCounts[game.src].push(game);
    } else {
      srcCounts[game.src] = [game];
    }
    
    // Подсчитываем повторения по name
    const normalizedName = game.name.toLowerCase().trim();
    if (nameCounts[normalizedName]) {
      nameCounts[normalizedName].push(game);
    } else {
      nameCounts[normalizedName] = [game];
    }
  });
  
  // Проверяем дубликаты по src (всегда недопустимы)
  Object.keys(srcCounts).forEach(src => {
    if (srcCounts[src].length > 1) {
      invalidDuplicates.push({
        type: 'src',
        value: src,
        count: srcCounts[src].length,
        games: srcCounts[src],
        reason: 'Одинаковые src недопустимы'
      });
    }
  });
  
  // Проверяем дубликаты по name
  Object.keys(nameCounts).forEach(normalizedName => {
    const gamesWithSameName = nameCounts[normalizedName];
    const actualCount = gamesWithSameName.length;
    const expectedCount = expectedCounts[normalizedName] || 1;
    
    if (actualCount > 1) {
      // Проверяем, есть ли игры с одинаковыми src
      const srcSet = new Set(gamesWithSameName.map(game => game.src));
      const hasIdenticalSrc = srcSet.size < actualCount;
      
      if (hasIdenticalSrc) {
        // Если есть игры с одинаковыми src - это ошибка
        invalidDuplicates.push({
          type: 'name_with_same_src',
          value: gamesWithSameName[0].name,
          count: actualCount,
          games: gamesWithSameName,
          reason: 'Игры с одинаковым name и src'
        });
      } else if (actualCount !== expectedCount) {
        // Если количество не соответствует эталону - это ошибка
        invalidDuplicates.push({
          type: 'name_count_mismatch',
          value: gamesWithSameName[0].name,
          count: actualCount,
          expected: expectedCount,
          games: gamesWithSameName,
          reason: `Ожидается ${expectedCount}, найдено ${actualCount}`
        });
      }
      // Если количество соответствует эталону и все src разные - это норма
    }
  });
  
  if (invalidDuplicates.length > 0) {
    console.log('❌ Обнаружены недопустимые дубликаты:');
    invalidDuplicates.forEach(duplicate => {
      console.log(`   ${duplicate.type.toUpperCase()}: "${duplicate.value}" - ${duplicate.reason}`);
      duplicate.games.forEach((game, index) => {
        console.log(`     ${index + 1}. name: "${game.name}", src: "${game.src}"`);
      });
    });
    return false;
  } else {
    console.log('✅ Дубликаты соответствуют эталонному списку!');
    return true;
  }
}

// Функция для проверки соответствия src и game_slug для AU
function checkSrcAuGameSlugMatch(srcValues, auGameSlugs) {
  console.log('\n🔍 Проверка соответствия src и game_slug для региона AU...');
  
  const mismatches = [];
  
  // Создаем множество из AU game_slug для быстрого поиска
  const auGameSlugSet = new Set(auGameSlugs);
  
  srcValues.forEach(src => {
    if (!auGameSlugSet.has(src)) {
      mismatches.push(src);
    }
  });
  
  if (mismatches.length > 0) {
    console.log('❌ Обнаружены несоответствия src и game_slug для AU:');
    mismatches.forEach(src => {
      console.log(`   src: "${src}" не найден среди game_slug для региона AU`);
    });
    return false;
  } else {
    console.log('✅ Все src соответствуют game_slug для региона AU!');
    return true;
  }
}

// Функция для сравнения списка игр с эталонным
function compareWithReferenceList(games) {
  console.log('\n🔍 Сравнение с эталонным списком игр...');
  
  // Получаем имена игр из нашего файла
  const currentGameNames = games.map(game => game.name);
  const uniqueCurrentNames = [...new Set(currentGameNames)];
  
  // Создаем множества для сравнения (приводим к нижнему регистру для сравнения)
  const currentNamesSet = new Set(uniqueCurrentNames.map(name => name.toLowerCase().trim()));
  const referenceNamesSet = new Set(referenceGamesList.map(name => name.toLowerCase().trim()));
  
  // Находим игры, которые есть в эталонном списке, но отсутствуют в нашем файле
  const missingGames = [];
  referenceGamesList.forEach(refGame => {
    if (!currentNamesSet.has(refGame.toLowerCase().trim())) {
      missingGames.push(refGame);
    }
  });
  
  // Находим игры, которые есть в нашем файле, но отсутствуют в эталонном списке
  const extraGames = [];
  uniqueCurrentNames.forEach(currentGame => {
    if (!referenceNamesSet.has(currentGame.toLowerCase().trim())) {
      extraGames.push(currentGame);
    }
  });
  
  // Подсчитываем частоту игр в эталонном списке
  const referenceCounts = {};
  referenceGamesList.forEach(game => {
    const normalizedName = game.toLowerCase().trim();
    referenceCounts[normalizedName] = (referenceCounts[normalizedName] || 0) + 1;
  });
  
  // Подсчитываем частоту игр в нашем списке
  const currentCounts = {};
  currentGameNames.forEach(game => {
    const normalizedName = game.toLowerCase().trim();
    currentCounts[normalizedName] = (currentCounts[normalizedName] || 0) + 1;
  });
  
  // Находим игры с неправильным количеством вхождений
  const countMismatches = [];
  Object.keys(referenceCounts).forEach(game => {
    const refCount = referenceCounts[game];
    const currentCount = currentCounts[game] || 0;
    if (refCount !== currentCount && currentCount > 0) {
      // Находим оригинальное имя игры для отображения
      const originalName = referenceGamesList.find(ref => ref.toLowerCase().trim() === game);
      countMismatches.push({
        name: originalName,
        expected: refCount,
        actual: currentCount
      });
    }
  });
  
  let hasIssues = false;
  
  // Выводим результаты
  if (missingGames.length > 0) {
    console.log('❌ Отсутствующие игры:');
    missingGames.forEach(game => {
      console.log(`   - ${game}`);
    });
    hasIssues = true;
  }
  
  if (extraGames.length > 0) {
    console.log('⚠️  Дополнительные игры (не в эталонном списке):');
    extraGames.forEach(game => {
      console.log(`   - ${game}`);
    });
    hasIssues = true;
  }
  
  if (countMismatches.length > 0) {
    console.log('⚠️  Неправильное количество вхождений:');
    countMismatches.forEach(mismatch => {
      console.log(`   - ${mismatch.name}: ожидается ${mismatch.expected}, фактически ${mismatch.actual}`);
    });
    hasIssues = true;
  }
  
  if (!hasIssues) {
    console.log('✅ Список игр полностью соответствует эталонному!');
  }
  
  console.log(`\nСтатистика:`);
  console.log(`   Эталонный список: ${referenceGamesList.length} игр`);
  console.log(`   Уникальных в эталоне: ${new Set(referenceGamesList.map(g => g.toLowerCase().trim())).size} игр`);
  console.log(`   Текущий файл: ${currentGameNames.length} игр`);
  console.log(`   Уникальных в файле: ${uniqueCurrentNames.length} игр`);
  
  return !hasIssues;
}

// Основная функция проверки наличия всех файлов
async function checkAllAssets() {
  console.log('Проверка наличия всех медиа-файлов для игр...');
  
  // Получаем и валидируем данные из активного файла
  const { games, srcValues, auGameSlugs, activeFile } = await parseAndValidateGamesData();
  
  if (srcValues.length === 0) {
    console.error('Не удалось получить значения src из файла с данными игр');
    process.exit(1);
  }
  
  console.log(`Найдено ${srcValues.length} уникальных игр для проверки`);
  
  // Проверяем дубликаты
  const noDuplicates = checkForDuplicates(games);
  
  // Проверяем соответствие src и game_slug для AU
  const srcMatchesAu = checkSrcAuGameSlugMatch(srcValues, auGameSlugs);
  
  // Проверяем соответствие с эталонным списком игр
  const matchesReference = compareWithReferenceList(games);
  
  // Если есть проблемы с данными, завершаем выполнение
  if (!noDuplicates || !srcMatchesAu || !matchesReference) {
    console.log('\n❌ Обнаружены проблемы в структуре данных!');
    process.exit(1);
  }
  
  console.log('\n🔍 Проверка наличия медиа-файлов...');
  
  const missingFiles = [];
  let allAssetsExist = true;
  
  // Проверяем наличие всех файлов для каждого src
  for (const src of srcValues) {
    // Пути к файлам, которые нужно проверить
    const filesToCheck = [
      { type: 'Thumbnail', path: path.join(rootDir, 'public', 'thumbs', `${src}.webp`) },
      { type: 'Poster', path: path.join(rootDir, 'public', 'video', 'posters', `${src}.webp`) },
      { type: 'WebM Video', path: path.join(rootDir, 'public', 'video', 'webm', `${src}.webm`) },
      { type: 'MP4 Video', path: path.join(rootDir, 'public', 'video', 'h264', `${src}.mp4`) }
    ];
    
    for (const fileInfo of filesToCheck) {
      if (!checkFileExists(fileInfo.path)) {
        allAssetsExist = false;
        missingFiles.push({ src, type: fileInfo.type, path: fileInfo.path });
      }
    }
  }
  
  // Выводим результаты проверки медиа-файлов
  if (allAssetsExist) {
    console.log('✅ Все медиа-файлы найдены!');
  } else {
    console.log('❌ Обнаружены отсутствующие медиа-файлы:');
    missingFiles.forEach(file => {
      console.log(`   ${file.src} - ${file.type}: ${path.relative(rootDir, file.path)}`);
    });
    
    // Группировка отсутствующих файлов по типу игры
    console.log('\nСводка отсутствующих файлов по играм:');
    const gamesMissing = {};
    missingFiles.forEach(file => {
      if (!gamesMissing[file.src]) {
        gamesMissing[file.src] = [];
      }
      gamesMissing[file.src].push(file.type);
    });
    
    Object.keys(gamesMissing).forEach(game => {
      console.log(`   ${game}: ${gamesMissing[game].join(', ')}`);
    });
    
    process.exit(1);
  }
  
  console.log('\n🎉 Все проверки пройдены успешно!');
}

// Запускаем проверку
checkAllAssets().catch(error => {
  console.error('Ошибка при выполнении проверки:', error);
  process.exit(1);
}); 