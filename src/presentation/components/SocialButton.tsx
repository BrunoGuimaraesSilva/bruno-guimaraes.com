import { chakra, VisuallyHidden, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SocialButtonProps<T = {}> extends ButtonProps {
  children: ReactNode;
  label: string;
  href: string;
  customProps?: T;
}

export default function SocialButton<T>({
  children,
  label,
  customProps,
  href,
  ...rest
}: SocialButtonProps<T>) {
  const handleClick = () => {
    window.open(href, "_blank");
  };
  return (
    <chakra.button
      as="a"
      bg="transparent"
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{ bg: "gray.100" }}
      onClick={handleClick}
      {...customProps}
      {...rest}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}
