import Vue from 'vue'
import VueI18n from 'vue-i18n'
import vnMessage from './vn.json'
import enMessage from './en.json'
import cnMessage from './cn.json'
import korMessage from './kor.json'
import dubaiMessage from './dubai.json'

Vue.use(VueI18n);

const messages = {
  vn: vnMessage,
  en: enMessage,
  cn: cnMessage,
  kor: korMessage,
  dubai: dubaiMessage
};
const lang = localStorage.getItem('selectedLanguage');
const i18n = new VueI18n({
  locale: lang, // set locale
  messages,
  fallbackLocale: 'en'
});
export const $t = i18n.t.bind(i18n);
export default i18n
