import React from "react";
import { Button, ButtonProps, Skeleton, SkeletonProps } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

interface GButtonProps<T = {}> extends ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean; 
  skeletonProps?: SkeletonProps;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  color?: string;
  customProps?: T;
}

const GButton = <T,>({
  onClick,
  children,
  isDisabled,
  isLoading = false, 
  skeletonProps,
  variant = "solid",
  size = "md",
  color,
  customProps,
  ...rest
}: GButtonProps<T>) => {
  const defaultColor = useColorModeValue("background_dark", "#EBF1FC");
  const buttonColor = color || defaultColor;

  if (isLoading) {
    return (
      <Skeleton
        height={size === "sm" ? "32px" : size === "md" ? "40px" : "48px"}
        width="100px" 
        borderRadius="md" 
        {...skeletonProps}
      />
    );
  }

  return (
    <Button
      onClick={onClick}
      backgroundColor={buttonColor}
      color={useColorModeValue("primary_dark.900", "primary_light.50")}
      disabled={isDisabled}
      variant={variant}
      size={size}
      {...customProps}
      {...rest}
      _hover={{ bg: useColorModeValue("primary_dark.700", "primary_light.300") }}
    >
      {children}
    </Button>
  );
};

export default GButton;