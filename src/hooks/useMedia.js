import { useMediaQuery } from "@chakra-ui/react";

const useMedia = () => {
  const [isMobile, isTablet, isLargeDevice] = useMediaQuery([
    "(max-width: 767px)",
    // "(min-width: 411px) and (max-width: 615px)",
    "(min-width: 768px) and (max-width: 1023px)",
    "(min-width: 1024px)",
  ]);
  return {
    isMobile,
    isTablet,
    isLargeDevice,
  };
};

export default useMedia;
