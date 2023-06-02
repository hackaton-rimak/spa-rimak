import React from "react";
import { Box } from "@mui/material";
import LogoImage from "../../assets/img/hackaton-image.png";
import { NavLink } from "react-router-dom";
const Logo: React.FC = () => {
  return (
    <NavLink to={"/kajita"}>
      <Box
        component={"img"}
        src={`${LogoImage}`}
        alt={"logo hackaton"}
        width={"100%"}
      />
    </NavLink>
  );
};

export default Logo;
