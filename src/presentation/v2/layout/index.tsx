import { type ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import V2Navbar from "@v2/desktop/navbar";
import V2Footer from "./footer";
import { V2_COLORS } from "@infra/theme/v2-glass";

interface V2LayoutProps {
  children: ReactNode;
}

export default function V2Layout({ children }: V2LayoutProps) {
  return (
    <>

      <Box
        minH="100vh"
        bg={V2_COLORS.surface}
        color={V2_COLORS.onSurface}
        fontFamily="Inter, sans-serif"
        position="relative"
      >
        {/* Refractive background orbs */}
        <Box
          position="fixed"
          top="-10%"
          left="-10%"
          width="50%"
          height="50%"
          style={{ background: `${V2_COLORS.primary}0d` }}
          borderRadius="full"
          filter="blur(120px)"
          pointerEvents="none"
          zIndex={0}
        />
        <Box
          position="fixed"
          bottom="20%"
          right="-5%"
          width="40%"
          height="40%"
          style={{ background: `${V2_COLORS.tertiary}0d` }}
          borderRadius="full"
          filter="blur(120px)"
          pointerEvents="none"
          zIndex={0}
        />

        <V2Navbar />

        <Box as="main" position="relative" zIndex={1} pt="9rem" pb="6rem">
          {children}
        </Box>

        <V2Footer />
      </Box>
    </>
  );
}
