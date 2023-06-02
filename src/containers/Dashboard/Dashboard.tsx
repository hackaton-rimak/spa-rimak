import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/storeHook";
import { setClient, setProductParam } from "../../store/reducers/app/app.slice";
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import TotalPie from "../../components/TotalPie/TotalPie";
import DayRange from "../../components/DayRange/DayRange";
import { getData } from "../../store/thunks/app.thunk";
import Comments from "../../components/Comments/Comments";
import { RootState } from "../../store/store";

const Dashboard: FC = () => {
  const { product } = useParams();
  const dispatch = useAppDispatch();
  const { client } = useAppSelector((state: RootState) => state.app);

  useEffect(() => {
    if (!product) {
      dispatch(setProductParam("kajita"));
      dispatch(getData({ product: "kajita" }));
      return;
    }
    dispatch(setProductParam(product));
  }, [product]);

  const handleChange = (e: SelectChangeEvent<HTMLInputElement>) => {
    dispatch(setClient(e.target.value));
  };

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
      <Box sx={{ width: "300px" }}>
        <Typography color={"primary.main"}>Selecciona un cliente</Typography>
        <Select
          sx={{ width: "100%" }}
          placeholder={"Selecciona un cliente"}
          value={client}
          onChange={handleChange}
        >
          <MenuItem value={""}>Ver todos</MenuItem>
          <MenuItem value={"client1"}>Client 1</MenuItem>
          <MenuItem value={"client2"}>Client 2</MenuItem>
          <MenuItem value={"client3"}>Client 3</MenuItem>
          <MenuItem value={"client4"}>Client 4</MenuItem>
        </Select>
      </Box>
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
