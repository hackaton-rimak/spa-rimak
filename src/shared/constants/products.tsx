import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { ReactNode } from "react";

export interface IProduct {
  name: string;
  icon: ReactNode;
}

export const products: IProduct[] = [
  { name: "Cajita", icon: <HomeRepairServiceIcon sx={{ color: "#ffffff" }} /> },
  { name: "Smarlinks", icon: <InsertLinkIcon sx={{ color: "#ffffff" }} /> },
];
