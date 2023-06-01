import { createNamedStyles } from "../../shared/interfaces/create_named_styles";

export const sidebarStyles = createNamedStyles({
  drawer: {
    width: "270px",
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      backgroundColor: "primary.main",
      width: "270px",
      boxSizing: "border-box",
      padding: "0px 10px !important",
      borderTopRightRadius: "30px",
      borderBottomRightRadius: "30px",
      boxShadow:
        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
    },
  },
  divider: {
    borderColor: "#ffffff",
  },
  productName: {
    color: "#ffffff",
    "& span": {
      fontWeight: "700 !important",
    },
  },
  sectionSelected: {
    "&#listItem .MuiButtonBase-root": {
      borderRadius: "30px",
      backgroundColor: "secondary.main",
      transition: "all 250ms linear",
    },
  },
  section: {
    borderRadius: "30px",
    backgroundColor: "transparent",
    "&#listItem .MuiButtonBase-root": {
      borderRadius: "30px",
      backgroundColor: "transparent",
      transition: "all 250ms linear",
    },
    "&#listItem .MuiButtonBase-root:hover": {
      borderRadius: "30px",
      backgroundColor: "secondary.main",
      boxShadow:
        "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
      transition: "all 250ms linear",
    },
  },
});
