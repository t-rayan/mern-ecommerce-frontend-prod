export const widthAdjuster = (currentDevice, isSidebar) => {
  if (currentDevice === "large" && isSidebar) {
    return {
      navbar: "82%",
      sidebar: "18%",
    };
  } else if (currentDevice === "large" && !isSidebar) {
    return {
      navbar: "100%",
      sidebar: "18%",
    };
  } else if (currentDevice === "tablet" || currentDevice === "mobile") {
    return {
      navbar: "100%",
      sidebar: "16rem",
    };
  }
};
