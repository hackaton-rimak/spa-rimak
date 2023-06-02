import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { floatingButtonStyles } from "./FloatingButton.styles";
import ChatIcon from "@mui/icons-material/Chat";


const FloatingButton: React.FC = () => {

const [showSquare, setShowSquare] = React.useState<boolean>(false);

  return (
    <Box sx={floatingButtonStyles.container}>
      <Box sx={floatingButtonStyles.floatingButton} onClick={()=>setShowSquare(!showSquare)} >
        <Box pt={"11px"} >
          <ChatIcon sx={floatingButtonStyles.iconFloatting} />
        </Box>
      </Box>
      {showSquare && <Box sx={floatingButtonStyles.floatingSquare}>
      <Box pt={"100px"} pl={"30px"}>
        <Button variant="contained" href="https://t.me/user_rimak_bot">Danos tu opinion</Button>
    </Box>
      </Box>}
    </Box>
  );
};

export default FloatingButton;
