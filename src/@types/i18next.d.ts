import "i18next";

import common_ptbr from "locales/pt-br/common.json";
import common_en from "locales/en-us/common.json";

import button_ptbr from "locales/pt-br/button.json";
import button_en from "locales/en-us/button.json";

import about_ptbr from "locales/pt-br/about.json";
import about_en from "locales/en-us/about.json";

import footer_ptbr from "locales/pt-br/footer.json";
import footer_en from "locales/en-us/footer.json";

import privacyPolicy_ptbr from "locales/pt-br/privacyPolicy.json";
import privacyPolicy_en from "locales/en-us/privacyPolicy.json";

import termsAndConditions_ptbr from "locales/pt-br/termsAndConditions.json";
import termsAndConditions_en from "locales/en-us/termsAndConditions.json";

import contact_ptbr from "locales/pt-br/contact.json";
import contact_en from "locales/en-us/contact.json";

import projects_ptbr from "locales/pt-br/projects.json";
import projects_en from "locales/en-us/projects.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common_en";
    resources: {
      common_ptbr: typeof common_ptbr;
      common_en: typeof common_en;
      button_ptbr: typeof button_ptbr;
      button_en: typeof button_en;
      about_ptbr: typeof about_ptbr;
      about_en: typeof about_en;
      footer_ptbr: typeof footer_ptbr;
      footer_en: typeof footer_en;
      privacyPolicy_ptbr: typeof privacyPolicy_ptbr;
      privacyPolicy_en: typeof privacyPolicy_en;
      termsAndConditions_ptbr: typeof termsAndConditions_ptbr;
      termsAndConditions_en: typeof termsAndConditions_en;
      contact_ptbr: typeof contact_ptbr;
      contact_en: typeof contact_en;
      projects_ptbr: typeof projects_ptbr;
      projects_en: typeof projects_en;
    };
  }
}
