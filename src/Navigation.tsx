import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./containers/Dashboard/Dashboard";
import Insights from "./containers/Insights/Insights";
import Login from "./containers/Login/Login";


const Navigation: FC = () => {

  let isLogin = false
  isLogin = window.location.href.includes("/login")

  return (
    <BrowserRouter>

      { !isLogin && <Sidebar />}
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path={":product"} element={<Dashboard />} />
        <Route path={"login"} element={<Login />} />
        <Route path={":product/insights"} element={<Insights />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;


