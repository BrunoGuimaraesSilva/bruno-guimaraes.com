import { Box, BoxProps } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

interface SeparatorProps extends BoxProps {}

const GSeparator: React.FC<SeparatorProps> = ({ children, ...props }) => {
  const borderColor = useColorModeValue("background_dark", "background_light");

  return (
    <Box
      borderTopWidth={3}
      borderStyle="solid"
      borderColor={borderColor}
      mt={5}
      mb={5}
      {...props}
    />
  );
};

export default GSeparator;
