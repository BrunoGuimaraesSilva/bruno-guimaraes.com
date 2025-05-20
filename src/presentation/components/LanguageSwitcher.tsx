import Image from "next/image";
import flagEn from "public/assets/flag_en.svg";
import flagPt from "public/assets/flag_ptbr.svg";
import i18next from "i18next";
import { useLanguage } from "@presentation/contexts/LanguageContext";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  console.log("LanguageSwitcher", language);
  const flag = language === "pt-BR" ? flagPt : flagEn;
  const { pathname, asPath, query, push } = useRouter();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt-BR" : "en");
    push({ pathname, query }, asPath, { locale: language === "en" ? "pt-BR" : "en" });

    i18next.changeLanguage(language);
  };
  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
    >
      <Image src={flag} alt="Language icon" width={24} height={24} />
    </button>
  );
};

export default LanguageSwitcher;
