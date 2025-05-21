import { Box, Text, Flex } from "@chakra-ui/react";
import ResponsiveContainer from "src/presentation/wrappers/ResponsiveContainer";
import { useEffect, useRef, useCallback } from "react";
import { animate } from "animejs";
import i18n from "@i18n";
import GLink from "@components/GLink";
import { LuExternalLink } from "react-icons/lu";
const About: React.FC = () => {
  const { t } = i18n;

  const containerRef = useRef<HTMLDivElement | null>(null);

  const animateSpans = useCallback(() => {
    if (!containerRef.current) return;

    const spans = containerRef.current.querySelectorAll("span");
    if (!spans.length) return;

    animate(spans, {
      y: [
        { to: "-2.75rem", ease: "outExpo", duration: 600 },
        { to: 0, ease: "outBounce", duration: 800, delay: 100 },
      ],
      rotate: {
        from: "-1turn",
        delay: 0,
      },
      delay: (_, i) => i * 50,
      easing: "inOutCirc",
    });
  }, []);

  useEffect(() => {
    animateSpans();
  }, [animateSpans]);

  const text = "Bruno Guimarães";

  return (
    <ResponsiveContainer>
      <Flex
        position="relative"
        align="center"
        justify="flex-start"
        height={{ base: "auto", md: "400px" }}
        gap={8}
        py={20}
        direction={{ base: "column", md: "row" }}
      >
        <Box
          maxW="400px"
          zIndex={2}
          px={4}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box
            ref={containerRef}
            onClick={animateSpans}
            fontSize="3xl"
            fontWeight="bold"
            display="flex"
            flexWrap="wrap"
            justifyContent={{ base: "center", md: "flex-start" }}
            gap={1}
            cursor="pointer"
          >
            {text.split("").map((char, index) => (
              <Text
                as="span"
                key={index}
                display="inline-block"
                userSelect="none"
              >
                {char === " " ? "\u00A0" : char}
              </Text>
            ))}
          </Box>
          <br />
          <Text textStyle="sm">
            {t("common:description")}
          </Text>
          <br />
          <Text textStyle="sm">{t("common:aboutProject")}</Text>
          <GLink
            target="_blank"
            href="https://github.com/BrunoGuimaraesSilva/bruno-guimaraes.com"
            aria-label="GitHub"
            textStyle="sm"
          >
            GitHub.
           <LuExternalLink />
          </GLink>
        </Box>
      </Flex>
    </ResponsiveContainer>
  );
};

export default About;
