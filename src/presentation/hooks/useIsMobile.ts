import { useBreakpointValue } from "@chakra-ui/react";

const useIsMobile = (): boolean => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return isMobile ?? false;
};

export default useIsMobile;