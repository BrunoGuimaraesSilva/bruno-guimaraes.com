import i18next from 'i18next';

import common_ptbr from "public/locales/pt-br/common.json";
import button_ptbr from "public/locales/pt-br/button.json";
import common_en from "public/locales/en/common.json";
import button_en from "public/locales/en/button.json";


i18next.init({
  debug: true,
  fallbackLng: 'en',
  resources: {
    en: {
      common: common_en,
      button: button_en,
    },
    ptbr: {
      common: common_ptbr,
      button: button_ptbr,
    },
  },
});

export default i18next;