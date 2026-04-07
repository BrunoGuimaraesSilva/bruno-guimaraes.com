import { type ReactElement } from "react";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import V2Layout from "@v2/layout";
import HeroSection from "@v2/components/hero-section";
import ExperienceCard from "@v2/components/experience-card";
import StudiesCard from "@v2/components/studies-card";
import AdaptabilityCard from "@v2/components/adaptability-card";


const MAX_CONTENT_WIDTH = "7xl";

function V2Page() {
  return (
    <>
      <Head>
        <title>Bruno Guimarães — Senior Software Engineer</title>
        <meta
          name="description"
          content="Senior Full-Stack Software Engineer with 6+ years designing, modernising and scaling high-volume distributed systems. Specialised in event-driven pipelines, REST APIs and microservices."
        />
      </Head>

      <Box maxW={MAX_CONTENT_WIDTH} mx="auto" px={8}>
        {/* Hero */}
        <HeroSection />

        {/* Bento Grid */}
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
          gap={6}
          mb="6rem"
        >
          <Box gridColumn={{ base: "span 1", md: "span 8" }}>
            <ExperienceCard />
          </Box>
          <Box gridColumn={{ base: "span 1", md: "span 4" }}>
            <StudiesCard />
          </Box>
          <Box gridColumn={{ base: "span 1", md: "span 12" }}>
            <AdaptabilityCard />
          </Box>
        </Box>

      </Box>
    </>
  );
}

V2Page.getLayout = function getLayout(page: ReactElement) {
  return <V2Layout>{page}</V2Layout>;
};

export default V2Page;
