import React from "react";
import { Box, BoxProps, Container as ChakraContainer, ContainerProps } from "@chakra-ui/react";

interface ResponsiveContainerProps<T extends React.ElementType = typeof ChakraContainer> {
  as?: T; 
  children: React.ReactNode;
  className?: string;
  containerProps?: React.ComponentProps<T>; 
}

const ResponsiveContainer = <T extends React.ElementType = typeof ChakraContainer>({
  as: Component = ChakraContainer, 
  children,
  className,
  containerProps,
}: ResponsiveContainerProps<T>) => {
  return (
    <Component
      className={className}
      maxW={{ base: "80%" }} 
      mx="auto" 
      px={{ base: 4, md: 8 }} 
      {...(containerProps as React.ComponentProps<T>)}
    >
      {children}
    </Component>
  );
};

export default ResponsiveContainer;