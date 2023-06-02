import React from "react";
import { Column } from "@ant-design/charts";
import { useAppSelector } from "../../store/hooks/storeHook";
import { RootState } from "../../store/store";
import { parseInsightsChart } from "../../shared/util/parseData";
import ChartWrapper from "../ChartWrapper/ChartWrapper";
import { Box, Typography } from "@mui/material";

const InsightsChart: React.FC = () => {
  const { dataInsights } = useAppSelector((state: RootState) => state.app);

  const columColor = (index: number) => {
    let colors = ["#6295f9", "#7666f9", "#5fdaab"];

    return colors[index];
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "60px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {dataInsights.map((item, index) => (
        <Box width={"40%"}>
          <Typography
            color={"primary.main"}
            sx={{ mb: "20px", fontWeight: "500" }}
          >
            {index + 1}. {item._id}
          </Typography>
          <ChartWrapper width={"100%"}>
            <Column
              data={parseInsightsChart(item)}
              xField={"month"}
              yField={"averageValue"}
              color={columColor(index)}
              autoFit
              padding={40}
            />
          </ChartWrapper>
        </Box>
      ))}
    </Box>
  );
};

export default InsightsChart;
