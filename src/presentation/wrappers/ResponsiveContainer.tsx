import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface ResponsiveContainerProps extends BoxProps {
  children: React.ReactNode;
  className?: string;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className,
  ...boxProps
}) => {
  return (
    <Box
      className={className}
      {...boxProps}
      maxW={{ base: "100%", md: "80%", lg: "1200px" }} // Adjust widths for different screen sizes
      mx="auto" // Center container horizontally
      px={{ base: 4, md: 8 }} // Add padding for responsiveness
    >
      {children}
    </Box>
  );
};

export default ResponsiveContainer;
