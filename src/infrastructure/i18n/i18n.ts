import i18next from "i18next";

import common_ptbr from "public/locales/pt-BR/common.json";
import common_en from "public/locales/en/common.json";

import button_ptbr from "public/locales/pt-BR/button.json";
import button_en from "public/locales/en/button.json";

import about_ptbr from "public/locales/pt-BR/about.json";
import about_en from "public/locales/en/about.json";

import footer_ptbr from "public/locales/pt-BR/footer.json";
import footer_en from "public/locales/en/footer.json";

import privacyPolicy_ptbr from "public/locales/pt-BR/privacyPolicy.json";
import privacyPolicy_en from "public/locales/en/privacyPolicy.json";

import termsAndConditions_ptbr from "public/locales/pt-BR/termsAndConditions.json";
import termsAndConditions_en from "public/locales/en/termsAndConditions.json";

import contact_ptbr from "public/locales/pt-BR/contact.json";
import contact_en from "public/locales/en/contact.json";

import projects_ptbr from "public/locales/pt-BR/projects.json";
import projects_en from "public/locales/en/projects.json";


import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
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
      "pt-BR": {
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

export default i18next



