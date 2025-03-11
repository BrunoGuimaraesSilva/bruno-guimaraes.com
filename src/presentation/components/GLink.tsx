import React from "react";
import {
  LinkProps,
  Skeleton,
  SkeletonProps,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import NextLink from "next/link"

interface GLinkProps<T = {}> extends LinkProps {
  href?: string;
  children: React.ReactNode;
  isLoading?: boolean;
  skeletonProps?: SkeletonProps;
  color?: string;
  hoverColor?: string;
  customProps?: T;
}

const GLink = <T,>({
  href = '',
  children,
  isLoading = false,
  skeletonProps,
  color,
  hoverColor,
  customProps,
  ...rest
}: GLinkProps<T>) => {
  const bgDefaultColor = useColorModeValue(
    "background_dark",
    "background_light"
  );
  const defaultColor = useColorModeValue(
    "primary_dark.900",
    "primary_light.50"
  );
  const defaultHoverColor = useColorModeValue(
    "primary_light.50",
    "primary_dark.900"
  );
  const linkColor = color || defaultColor;
  const hColor = hoverColor || defaultHoverColor;

  if (isLoading) {
    return (
      <Skeleton
        height="20px"
        width="100px"
        borderRadius="md"
        {...skeletonProps}
      />
    );
  }

  return (
    <ChakraLink
      transition="background 0.3s ease"
      color={linkColor}
      _hover={{
        bg: bgDefaultColor,
        color: hColor,
      }}
      {...customProps}
      {...rest}
      asChild
    >
      <NextLink href={href}> {children}</NextLink>
    </ChakraLink>
  );
};

export default GLink;
