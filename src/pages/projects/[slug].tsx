import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";
import GButton from "@components/GButton";
import ResponsiveContainer from "@presentation/wrappers/ResponsiveContainer";
import { RiArrowLeftLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import i18n from "@i18n";


export default function AboutPage() {
  const router = useRouter();
  const { t, isInitialized } = i18n;
  const [translationsLoaded, setTranslationsLoaded] = useState(false);
  const [slugFound, setSlugFound] = useState<boolean | null>(null);

  useEffect(() => {
    if (router.query.slug) {
      const translations = t("projects:projects", {
        returnObjects: true,
        returnDetails: true,
      });

      if (translations?.res) {
        const isFinded = Object.keys(translations.res).includes(
          router.query.slug as string
        );

        setSlugFound(isFinded);

        if (!isFinded) {
          router.push("/404");
        } else {
          setTranslationsLoaded(true);
        }
      }
    }
  }, [isInitialized, router.query.slug, t]);

  if (slugFound === null || !translationsLoaded) {
    return <></>;
  }

  return (
    <ResponsiveContainer>
      <GButton
      mt={10}
        bg={"transparent"}
        borderRadius="lg" boxShadow="lg"
        onClick={() => router.back()}
        mb={"10px"}
      >
        <RiArrowLeftLine /> {t("button:goback")}
      </GButton>
      <Image
        src={t(`projects:projects:${router.query.slug}.image`)}
        alt={t(`projects:projects:${router.query.slug}.aboutTitle`)}
        borderRadius="lg"
        mb={6}
        maxH={300}
      />

      <VStack align="start">
        <Heading as="h1" size="xl">
          {t(`projects:projects:${router.query.slug}.aboutTitle`)}
        </Heading>
        <Text fontSize="md">
          {t(`projects:projects:${router.query.slug}.projectDescription`)}
        </Text>

        <Box>
          <Heading as="h2" size="md" mb={2}>
            {t(`projects:projects:${router.query.slug}.responsibilitiesTitle`)}
          </Heading>
          <Text fontSize="md">
            {t(
              `projects:projects:${router.query.slug}.responsibilitiesDescription`
            )}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="md" mb={2}>
            {t(`projects:projects:${router.query.slug}.projectImpactTitle`)}
          </Heading>
          <Text fontSize="md">
            {t(
              `projects:projects:${router.query.slug}.projectImpactDescription`
            )}
          </Text>
        </Box>
      </VStack>
    </ResponsiveContainer>
  );
}
