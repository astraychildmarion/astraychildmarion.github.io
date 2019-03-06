import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'tw',
  fallbackLocale: 'tw',
  messages: {
    'en': require('./en.json'),
    'tw': require('./tw.json')
  }
})

export default i18n
