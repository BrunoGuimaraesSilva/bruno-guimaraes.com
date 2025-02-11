import "i18next";

import common_ptbr from "locales/pt-br/common.json";
import common_en from "locales/en/common.json";

import button_ptbr from "locales/pt-br/button.json";
import button_en from "locales/en/button.json";

import about_ptbr from "locales/ptbr/about.json";
import about_en from "locales/en/about.json ";

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
    };
  }
}
