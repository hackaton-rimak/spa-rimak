import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks/storeHook";
import { setProductParam } from "../../store/reducers/app/app.slice";
import { Box } from "@mui/material";
import TotalPie from "../../components/TotalPie/TotalPie";
import DayRange from "../../components/DayRange/DayRange";

const Dashboard: FC = () => {
  const { product } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!product) {
      dispatch(setProductParam("cajita"));
      return;
    }
    dispatch(setProductParam(product));
  }, [product]);

  return (
    <Box sx={{ padding: "2%", display: "flex", gap: "20px", width: "100%" }}>
      <TotalPie />
      <DayRange />
    </Box>
  );
};

export default Dashboard;
