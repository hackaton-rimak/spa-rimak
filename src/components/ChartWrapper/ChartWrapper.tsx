import { FC, ReactNode } from "react";
import { Paper, Skeleton } from "@mui/material";
import { useAppSelector } from "../../store/hooks/storeHook";
import { RootState } from "../../store/store";

type Props = {
  children: ReactNode;
  width?: string;
};

const ChartWrapper: FC<Props> = ({ children, width }) => {
  const { loadingData } = useAppSelector((state: RootState) => state.app);
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
      {loadingData ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{ width: "100%", height: "100%", borderRadius: "20px" }}
        />
      ) : (
        children
      )}
    </Paper>
  );
};

export default ChartWrapper;
