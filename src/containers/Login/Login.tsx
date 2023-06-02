import { FC, Fragment } from "react";
import background from "./../../assets/img/loginHakaton.png";
import { Box } from "@mui/material";
import FloatingButton from "../../components/FloatingButton/FloatingButton";

const Login: FC = () => {

  return (
    <Fragment>
    <Box
        component={"img"}
        src={`${background}`}
        alt={"loginHackaton"}
        width={"100vw"}
      />
      <FloatingButton/>
      </Fragment>

  );
};

export default Login;
