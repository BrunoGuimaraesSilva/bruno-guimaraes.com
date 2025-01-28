import { chakra, VisuallyHidden } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useColorModeValue } from "src/presentation/ui/color-mode";

interface SocialButtonProps {
  children: ReactNode;
  label: string;
  href: string;
}

export default function SocialButton({
  children,
  label,
  href,
}: SocialButtonProps) {
  return (
    <chakra.button
      as="a"
      bg={'transparent'}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}
