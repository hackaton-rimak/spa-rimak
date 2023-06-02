import React from "react";
import ChartWrapper from "../ChartWrapper/ChartWrapper";
import { useAppSelector } from "../../store/hooks/storeHook";
import { RootState } from "../../store/store";
import { Typography } from "@mui/material";

const Comments: React.FC = () => {
  const { data } = useAppSelector((state: RootState) => state.app);

  const commentsList = () => {
    let response: string[] = [];

    data.forEach((item) => {
      item.sentiments.forEach((element) => {
        response.push(element.comments);
      });
    });

    return response.flat();
  };

  function getRandomColor(): string {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  return (
    <ChartWrapper width={"100%"}>
      {commentsList().map((comment) => (
        <Typography color={getRandomColor()} fontWeight={"500"}>
          {comment}
        </Typography>
      ))}
    </ChartWrapper>
  );
};

export default Comments;
