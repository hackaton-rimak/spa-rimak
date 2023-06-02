import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks/storeHook";
import { setProductParam } from "../../store/reducers/app/app.slice";
import InsightsChart from "../../components/InsightsChart/InsightsChart";

const Insights: React.FC = () => {
  const { product } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!product) {
      dispatch(setProductParam("kajita"));
      return;
    }
    dispatch(setProductParam(product));
  }, [product]);
  return (
    <>
      <InsightsChart />
    </>
  );
};

export default Insights;
