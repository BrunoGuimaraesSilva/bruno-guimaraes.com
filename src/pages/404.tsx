import { Box } from "@chakra-ui/react";
import LottieAnimation from "@shared/animation/404";

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
