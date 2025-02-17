import React from "react";
import { Container as ChakraContainer } from "@chakra-ui/react";

interface ResponsiveContainerProps<T extends React.ElementType = "div"> {
  as?: T;
  children: React.ReactNode;
  className?: string;
  containerProps?: React.ComponentPropsWithoutRef<T>;
}

const ResponsiveContainer = <T extends React.ElementType = "div">({
  as,
  children,
  className,
  containerProps,
}: ResponsiveContainerProps<T>) => {
  const Component = as || ChakraContainer as React.ElementType; // Ensuring type safety

  return (
    <Component
      className={(className)}
      maxW={{ base: "90%", md: "80%", lg: "75%" }}
      mx="auto"
      px={{ base: 4, md: 6, lg: 8 }}
      {...containerProps}
    >
      {children}
    </Component>
  );
};

export default ResponsiveContainer
