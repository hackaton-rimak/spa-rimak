import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks/storeHook";
import { setProductParam } from "../../store/reducers/app/app.slice";
import { Box } from "@mui/material";
import TotalPie from "../../components/TotalPie/TotalPie";
import DayRange from "../../components/DayRange/DayRange";
import { getData } from "../../store/thunks/app.thunk";
import Comments from "../../components/Comments/Comments";

const Dashboard: FC = () => {
  const { product } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!product) {
      dispatch(setProductParam("kajita"));
      dispatch(getData({ product: "kajita" }));
      return;
    }
    dispatch(setProductParam(product));
  }, [product]);

  return (
    <Box
      sx={{
        padding: "2%",
        display: "flex",
        gap: "60px",
        width: "calc(100% - 270px)",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <DayRange />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "60px",
        }}
      >
        <TotalPie />
        <Comments />
      </Box>
    </Box>
  );
};

export default Dashboard;
