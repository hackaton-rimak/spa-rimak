import React from "react";
import { parseFeelings } from "../../shared/util/parseData";
import { Pie } from "@ant-design/charts";
import ChartWrapper from "../ChartWrapper/ChartWrapper";
import { useAppSelector } from "../../store/hooks/storeHook";
import { RootState } from "../../store/store";

const TotalPie: React.FC = () => {
  const { data } = useAppSelector((state: RootState) => state.app);

  const config = {
    width: 400,
    appendPadding: 10,
    data: parseFeelings(data),
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "16px",
        },
        content: "Sentimientos",
      },
    },
  };

  return (
    <ChartWrapper>
      <Pie {...config} />
    </ChartWrapper>
  );
};

export default TotalPie;
