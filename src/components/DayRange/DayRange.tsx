import React from "react";
import ChartWrapper from "../ChartWrapper/ChartWrapper";
import { useAppSelector } from "../../store/hooks/storeHook";
import { RootState } from "../../store/store";
import { Column } from "@ant-design/charts";
import { parseDayRange } from "../../shared/util/parseData";

const DayRange: React.FC = () => {
  const { data } = useAppSelector((state: RootState) => state.app);

  const config = {
    data: parseDayRange(data),
    xField: "month",
    yField: "count",
    seriesField: "sentiment",
    isGroup: true,
    columnStyle: {
      radius: [0, 0, 0, 0],
    },
    autoFit: true,
    padding: 40,
  };

  return (
    <ChartWrapper width={"100%"}>
      <Column {...config} />
    </ChartWrapper>
  );
};

export default DayRange;
