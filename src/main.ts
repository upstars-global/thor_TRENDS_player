import { createApp } from 'vue'
import App from './App.vue'

// Импорт JSON-файлов локализации
import EN from './locale/en.json'
import DE from './locale/de.json'
import FR from './locale/fr.json'
import IT from './locale/it.json'
import PT from './locale/pt.json'
import ES from './locale/es.json'

// Собираем сообщения в объект
const messages = {
  en: EN,
  de: DE,
  fr: FR,
  'fr-CA': FR,
  it: IT,
  pt: PT,
  'pt-BR': PT,
  es: ES
}

let currentLocale = 'en'

// Простая функция для перевода
function t(key: string): string {
  return (messages[currentLocale] && messages[currentLocale][key]) || key
}

// Функция для смены языка (если есть нужный перевод)
function setLocale(newLocale: string): void {
  if (messages[newLocale]) {
    currentLocale = newLocale
  }
}

const app = createApp(App)

// Регистрируем глобальные функции для перевода
app.config.globalProperties.$t = t
app.config.globalProperties.$setLocale = setLocale

app.mount('#app')