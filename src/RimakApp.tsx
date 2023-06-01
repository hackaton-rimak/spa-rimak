import { Box } from "@mui/material";
import { FC } from "react";
import Navigation from "./Navigation";

const RimakApp: FC = () => {
  return (
    <Box sx={{ display: "flex", width: "100wh", height: "100vh" }}>
      <Navigation />
    </Box>
  );
};

export default RimakApp;
