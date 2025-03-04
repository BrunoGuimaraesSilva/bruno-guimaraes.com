import i18next from 'i18next';

import common_ptbr from "public/locales/pt-br/common.json";
import common_en from "public/locales/en/common.json";

import button_ptbr from "public/locales/pt-br/button.json";
import button_en from "public/locales/en/button.json";

import about_ptbr from "public/locales/pt-br/about.json";
import about_en from "public/locales/en/about.json";

import footer_ptbr from "public/locales/pt-br/footer.json";
import footer_en from "public/locales/en/footer.json";

import privacyPolicy_ptbr from "public/locales/pt-br/privacyPolicy.json";
import privacyPolicy_en from "public/locales/en/privacyPolicy.json";

import termsAndConditions_ptbr from "public/locales/pt-br/termsAndConditions.json";
import termsAndConditions_en from "public/locales/en/termsAndConditions.json";

import contact_ptbr from "public/locales/pt-br/contact.json";
import contact_en from "public/locales/en/contact.json";

i18next.init({
  debug: false,
  fallbackLng: 'en',
  resources: {
    en: {
      common: common_en,
      button: button_en,
      about: about_en,
      footer: footer_en,
      privacyPolicy: privacyPolicy_en,
      termsAndConditions: termsAndConditions_en,
      contact: contact_en
    },
    ptbr: {
      common: common_ptbr,
      button: button_ptbr,
      about: about_ptbr,
      footer: footer_ptbr,
      privacyPolicy: privacyPolicy_ptbr,
      termsAndConditions: termsAndConditions_ptbr,
      contact: contact_ptbr
    },
  },
});

export default i18next;