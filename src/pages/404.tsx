import { Box, Heading } from "@chakra-ui/react";
import LottieAnimation from "@presentation/animation/404";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h={"65vh"}
    >
      <LottieAnimation width="30%" height="30%" />
    </Box>
  );
}
