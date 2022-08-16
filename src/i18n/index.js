import { createI18n } from 'vue-i18n'
import cn from './zh'
import en from './en'

const messages = {
  en,
  cn
}
// console.log(messages)

const getCurrentLocale = () => {
  const currentLangua = navigator.language
  const languageCode = currentLangua == 'zh-CN' ? 'cn' : 'en'
  localStorage.setItem('languageCode', languageCode)
  return languageCode
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('languageCode') || 'cn',
  messages
})

export default i18n
