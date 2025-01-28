// src/presentation/ui/components/GButton.tsx

import React from 'react';
import { Button } from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';

interface GButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isDisabled?: boolean;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  color?: string; // New prop for custom color
}

const GButton: React.FC<GButtonProps> = ({
  onClick,
  children,
  isDisabled,
  variant = "solid",
  size = "md",
  color,
  ...rest
}) => {
  const defaultColor = useColorModeValue("background_dark", "#EBF1FC");
  const buttonColor = color || defaultColor; // Use custom color if provided, otherwise use default

  return (
    <Button
      onClick={onClick}
      backgroundColor={buttonColor}
      color={useColorModeValue("primary_dark.900", "primary_light.50")}
      disabled={isDisabled}
      variant={variant}
      size={size}
      {...rest}
      _hover={{ bg: useColorModeValue("primary_dark.700", "primary_light.300") }}
    >
      {children}
    </Button>
  );
};

export default GButton;
