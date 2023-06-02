import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./containers/Dashboard/Dashboard";
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
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;


