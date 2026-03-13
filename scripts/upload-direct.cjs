const crypto = require('crypto');
const fs = require('fs');
const https = require('https');
const path = require('path');

// Конфигурация R2
const config = {
    accessKeyId: 'e0d5ff786b08d6bdcd4e81a6d89bfdb2',
    secretAccessKey: '4fbba39ad8aa412bcdd3327ff8211ba46eed68de4571676cc28be0834dccd9ad',
    accountId: '83802fb0b9b6916c3c04c4927f3c3010',
    bucketName: 'winspirits-nl',
    region: 'auto',
    endpoint: '83802fb0b9b6916c3c04c4927f3c3010.r2.cloudflarestorage.com'
};

// Функция для создания подписи AWS4
function createAWS4Signature(method, url, headers, payload, timestamp) {
    const dateStamp = timestamp.toISOString().slice(0, 10).replace(/-/g, '');
    const amzDate = timestamp.toISOString().replace(/[:\-]|\.\d{3}/g, '');
    
    // Создание канонического запроса
    const canonicalUri = url.pathname;
    const canonicalQueryString = url.search.slice(1);
    const canonicalHeaders = Object.keys(headers)
        .sort()
        .map(key => `${key.toLowerCase()}:${headers[key]}\n`)
        .join('');
    const signedHeaders = Object.keys(headers)
        .sort()
        .map(key => key.toLowerCase())
        .join(';');
    
    const payloadHash = crypto.createHash('sha256').update(payload).digest('hex');
    
    const canonicalRequest = [
        method,
        canonicalUri,
        canonicalQueryString,
        canonicalHeaders,
        signedHeaders,
        payloadHash
    ].join('\n');
    
    // Создание строки для подписи
    const algorithm = 'AWS4-HMAC-SHA256';
    const credentialScope = `${dateStamp}/${config.region}/s3/aws4_request`;
    const stringToSign = [
        algorithm,
        amzDate,
        credentialScope,
        crypto.createHash('sha256').update(canonicalRequest).digest('hex')
    ].join('\n');
    
    // Создание ключа подписи
    const kDate = crypto.createHmac('sha256', `AWS4${config.secretAccessKey}`).update(dateStamp).digest();
    const kRegion = crypto.createHmac('sha256', kDate).update(config.region).digest();
    const kService = crypto.createHmac('sha256', kRegion).update('s3').digest();
    const kSigning = crypto.createHmac('sha256', kService).update('aws4_request').digest();
    
    // Подпись
    const signature = crypto.createHmac('sha256', kSigning).update(stringToSign).digest('hex');
    
    return {
        signature,
        credentialScope,
        amzDate,
        signedHeaders
    };
}

// Функция для загрузки файла
async function uploadFile(filePath, objectKey) {
    console.log(`🚀 Загружаю файл ${filePath} как ${objectKey}...`);
    
    if (!fs.existsSync(filePath)) {
        console.error(`❌ Файл ${filePath} не найден`);
        return false;
    }
    
    const fileContent = fs.readFileSync(filePath);
    const contentType = getContentType(filePath);
    const timestamp = new Date();
    
    const url = new URL(`https://${config.endpoint}/${config.bucketName}/${objectKey}`);
    
    const contentHash = crypto.createHash('sha256').update(fileContent).digest('hex');
    
    const headers = {
        'Host': url.hostname,
        'Content-Type': contentType,
        'Content-Length': fileContent.length.toString(),
        'X-Amz-Date': timestamp.toISOString().replace(/[:\-]|\.\d{3}/g, ''),
        'X-Amz-Content-Sha256': contentHash
    };
    
    const { signature, credentialScope, amzDate, signedHeaders } = createAWS4Signature(
        'PUT',
        url,
        headers,
        fileContent,
        timestamp
    );
    
    const authorization = `AWS4-HMAC-SHA256 Credential=${config.accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;
    headers['Authorization'] = authorization;
    
    return new Promise((resolve, reject) => {
        const req = https.request({
            hostname: url.hostname,
            port: 443,
            path: url.pathname,
            method: 'PUT',
            headers: headers
        }, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    console.log('✅ Файл успешно загружен!');
                    resolve(true);
                } else {
                    console.error(`❌ Ошибка загрузки: ${res.statusCode} ${res.statusMessage}`);
                    console.error('Ответ:', data);
                    resolve(false);
                }
            });
        });
        
        req.on('error', (err) => {
            console.error('❌ Ошибка запроса:', err.message);
            reject(err);
        });
        
        req.write(fileContent);
        req.end();
    });
}

// Функция для определения типа контента
function getContentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.txt': 'text/plain',
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.webp': 'image/webp',
        '.svg': 'image/svg+xml',
        '.mp4': 'video/mp4',
        '.webm': 'video/webm'
    };
    return mimeTypes[ext] || 'application/octet-stream';
}

// Основная функция
async function main() {
    const args = process.argv.slice(2);
    if (args.length < 2) {
        console.log('Использование: node upload-direct.cjs <путь_к_файлу> <ключ_объекта>');
        console.log('Пример: node upload-direct.cjs test-upload.txt test-upload.txt');
        process.exit(1);
    }
    
    const [filePath, objectKey] = args;
    
    try {
        const success = await uploadFile(filePath, objectKey);
        process.exit(success ? 0 : 1);
    } catch (error) {
        console.error('❌ Критическая ошибка:', error.message);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}
