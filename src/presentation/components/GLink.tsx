import React from "react";
import { Link, LinkProps, Skeleton, SkeletonProps } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

interface GLinkProps<T = {}> extends LinkProps {
  href: string;
  children: React.ReactNode;
  isLoading?: boolean; 
  skeletonProps?: SkeletonProps;
  color?: string;
  customProps?: T;
}

const GLink = <T,>({
  href,
  children,
  isLoading = false, 
  skeletonProps,
  color,
  customProps,
  ...rest
}: GLinkProps<T>) => {
  const bgDefaultColor = useColorModeValue("background_dark", "background_light");
  const defaultColor = useColorModeValue("primary_dark.900", "primary_light.50");
  const linkColor = color || defaultColor;

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
    <Link
      href={href}
      transition="background 0.3s ease"
      color={linkColor}
      _hover={{
        bg: bgDefaultColor,
        color: useColorModeValue("primary_light.50", "primary_dark.900"),
      }}
      {...customProps}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default GLink;