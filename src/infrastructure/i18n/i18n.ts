import i18next from "i18next";

import common_ptbr from "public/locales/pt-br/common.json";
import common_en from "public/locales/en-us/common.json";

import button_ptbr from "public/locales/pt-br/button.json";
import button_en from "public/locales/en-us/button.json";

import about_ptbr from "public/locales/pt-br/about.json";
import about_en from "public/locales/en-us/about.json";

import footer_ptbr from "public/locales/pt-br/footer.json";
import footer_en from "public/locales/en-us/footer.json";

import privacyPolicy_ptbr from "public/locales/pt-br/privacyPolicy.json";
import privacyPolicy_en from "public/locales/en-us/privacyPolicy.json";

import termsAndConditions_ptbr from "public/locales/pt-br/termsAndConditions.json";
import termsAndConditions_en from "public/locales/en-us/termsAndConditions.json";

import contact_ptbr from "public/locales/pt-br/contact.json";
import contact_en from "public/locales/en-us/contact.json";

import projects_ptbr from "public/locales/pt-br/projects.json";
import projects_en from "public/locales/en-us/projects.json";

import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";

i18next
.use(LanguageDetector)
.use(I18NextHttpBackend)
.init({
  debug: false,
  fallbackLng: "en-us",
  backend: {
    crossDomain: true,
  },
  resources: {
    en: {
      common: common_en,
      button: button_en,
      about: about_en,
      footer: footer_en,
      privacyPolicy: privacyPolicy_en,
      termsAndConditions: termsAndConditions_en,
      contact: contact_en,
      projects: projects_en,
    },
    ptbr: {
      common: common_ptbr,
      button: button_ptbr,
      about: about_ptbr,
      footer: footer_ptbr,
      privacyPolicy: privacyPolicy_ptbr,
      termsAndConditions: termsAndConditions_ptbr,
      contact: contact_ptbr,
      projects: projects_ptbr,
    },
  },
});

export default i18next;
