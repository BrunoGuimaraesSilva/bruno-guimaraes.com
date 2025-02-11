import { Box, Flex, Text } from "@chakra-ui/react";
import GImage from "@components/GImage";
import useIsMobile from "@hooks/useIsMobile";
import photo from "public/assets/first.png";
import ResponsiveContainer from "src/presentation/wrappers/ResponsiveContainer";

const AboutSectionDesktop: React.FC = () => {
  return (
    <ResponsiveContainer
      containerProps={{
        id: "AboutSectionDesktop",
      }}
    >
      <Flex mt={5}>
        <Box w={"100vw"} minW={250} pr={5}>
          <GImage
            style={{ borderRadius: "5px" }}
            width={250}
            src={photo}
            alt={"photo"}
          />
        </Box>

        <Box>
          <Text fontWeight="medium" textStyle="4xl" mb={5}>
            Meet Bruno, Software Engineer
          </Text>
          <Text textStyle="sm">
            Bruno is a passionate software engineer with 5 years of experience,
            thriving on blending technology and creativity. He specializes in
            front-end development and has extensive experience working with
            TypeScript, PHP, and SQL. His dedication to crafting intuitive user
            experiences drives him to continuously learn and adapt in the
            fast-paced tech landscape.
          </Text>
        </Box>
      </Flex>
    </ResponsiveContainer>
  );
};

const AboutSectionMobile: React.FC = () => {
  return (
    <ResponsiveContainer
      containerProps={{
        id: "AboutSectionMobile",
      }}
    >
      <Flex justifyContent={"center"} direction="column" gap="3">
        <Box
          minW={250}
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
        >
          <GImage
            style={{
              borderRadius: "5px",
            }}
            width={250}
            src={photo}
            alt={"photo"}
          />
        </Box>

        <Text fontWeight="medium" textStyle="4xl" mb={5}>
          Meet Bruno, Software Engineer
        </Text>
        <Text textStyle="sm">
          Bruno is a passionate software engineer with 5 years of experience,
          thriving on blending technology and creativity. He specializes in
          front-end development and has extensive experience working with
          TypeScript, PHP, and SQL. His dedication to crafting intuitive user
          experiences drives him to continuously learn and adapt in the
          fast-paced tech landscape.
        </Text>
      </Flex>
    </ResponsiveContainer>
  );
};

export default function AboutSection() {
  const isMobile = useIsMobile();

  return isMobile ? <AboutSectionMobile /> : <AboutSectionDesktop />;
}
