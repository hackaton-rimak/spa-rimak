import { FC, ReactNode } from "react";
import { Paper } from "@mui/material";

type Props = {
  children: ReactNode;
  width?: string;
};

const ChartWrapper: FC<Props> = ({ children, width }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        width: width ?? "400px",
        height: "350px",
        borderRadius: "20px",
        padding: "10px",
      }}
    >
      {children}
    </Paper>
  );
};

export default ChartWrapper;
