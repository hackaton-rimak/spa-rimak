import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import InsightsIcon from "@mui/icons-material/Insights";

import { ReactNode } from "react";

export interface IProduct {
  name: string;
  icon: ReactNode;
  type?: string;
  route: string;
}

export const products: IProduct[] = [
  {
    name: "Kajita",
    icon: <HomeRepairServiceIcon sx={{ color: "#ffffff" }} />,
    route: "kajita",
  },
  {
    name: "Smartlinks",
    icon: <InsertLinkIcon sx={{ color: "#ffffff" }} />,
    route: "smartlinks",
  },
  {
    name: "Insights",
    icon: <InsightsIcon sx={{ color: "#ffffff" }} />,
    type: "question_average",
    route: "insights/insights",
  },
];
