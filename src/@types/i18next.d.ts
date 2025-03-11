import "i18next";

import common_ptbr from "src/locales/pt-br/common.json";
import common_en from "src/locales/en/common.json";

import button_ptbr from "src/locales/pt-br/button.json";
import button_en from "src/locales/en/button.json";

import about_ptbr from "src/locales/pt-br/about.json";
import about_en from "src/locales/en/about.json";

import footer_ptbr from "src/locales/pt-br/footer.json";
import footer_en from "src/locales/en/footer.json";

import privacyPolicy_ptbr from "src/locales/pt-br/privacyPolicy.json";
import privacyPolicy_en from "src/locales/en/privacyPolicy.json";

import termsAndConditions_ptbr from "src/locales/pt-br/termsAndConditions.json";
import termsAndConditions_en from "src/locales/en/termsAndConditions.json";

import contact_ptbr from "src/locales/pt-br/contact.json";
import contact_en from "src/locales/en/contact.json";

import projects_ptbr from "src/locales/pt-br/projects.json";
import projects_en from "src/locales/en/projects.json";

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
      ptbr: {
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

