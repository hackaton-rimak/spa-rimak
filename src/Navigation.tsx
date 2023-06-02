import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./containers/Dashboard/Dashboard";
import Insights from "./containers/Insights/Insights";

const Navigation: FC = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path={":product"} element={<Dashboard />} />
        <Route path={":product/insights"} element={<Insights />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
