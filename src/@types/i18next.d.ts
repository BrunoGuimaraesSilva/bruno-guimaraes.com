import "i18next";

import common_ptbr from "locales/pt-br/common.json";
import button_ptbr from "locales/pt-br/button.json";
import common_en from "locales/en/common.json";
import button_en from "locales/en/button.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common_en";
    resources: {
      common_ptbr: typeof common_ptbr;
      button_ptbr: typeof button_ptbr;
      common_en: typeof common_en;
      button_en: typeof button_en;
    };
  }
}

