import React from "react";
import Image from "next/image";
import flagEn from "public/assets/flag_en.svg";
import flagPt from "public/assets/flag_ptbr.svg";
import { useLanguage } from "@shared/contexts/LanguageContext";
import { Button, ButtonProps } from "@chakra-ui/react";

export const LanguageSwitcher = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function LanguageSwitcher(props, ref) {
    const { language, setLanguage } = useLanguage();
    const flag = language === "pt-BR" ? flagPt : flagEn;

    const toggleLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
      const nextLang = language === "en" ? "pt-BR" : "en";
      setLanguage(nextLang);
      props.onClick?.(e);
    };

    return (
      <Button
        ref={ref}
        onClick={toggleLanguage}
        aria-label="Toggle language"
        variant="ghost"
        size="sm"
        {...props}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          ...props.style,
        }}
      >
        <Image src={flag} alt="Language icon" width={24} height={24} />
      </Button>
    );
  }
);
