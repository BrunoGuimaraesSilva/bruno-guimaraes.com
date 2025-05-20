import "i18next";

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

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      en: {
        common: typeof common_en;
        button: typeof button_en;
        about: typeof about_en;
        footer: typeof footer_en;
        privacyPolicy: typeof privacyPolicy_en;
        termsAndConditions: typeof termsAndConditions_en;
        contact: typeof contact_en;
        projects: typeof projects_en;
      };
      'pt-BR': {
        common: typeof common_ptbr;
        button: typeof button_ptbr;
        about: typeof about_ptbr;
        footer: typeof footer_ptbr;
        privacyPolicy: typeof privacyPolicy_ptbr;
        termsAndConditions: typeof termsAndConditions_ptbr;
        contact: typeof contact_ptbr;
        projects: typeof projects_ptbr;
      };
    };
  }
}

