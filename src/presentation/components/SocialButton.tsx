import { chakra, VisuallyHidden, ButtonProps, Icon } from "@chakra-ui/react";
import { useColorModeValue } from "@presentation/ui/color-mode";
import { IconType } from "react-icons";

interface SocialButtonProps<T = {}> extends ButtonProps {
  icon: IconType;
  label: string;
  href: string;
  customProps?: T;
}

export default function SocialButton<T>({
  icon,
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
      _hover={{ bgColor: useColorModeValue("background_dark", "background_light")}}
      onClick={handleClick}
      {...customProps}
      {...rest}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon as={icon} _hover={{ color: useColorModeValue("background_light", "background_dark") }} fontSize="2xl" />
    </chakra.button>
  );
}
