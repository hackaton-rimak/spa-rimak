import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./containers/Dashboard/Dashboard";

const Navigation: FC = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path={":product"} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
