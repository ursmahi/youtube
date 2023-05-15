import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";

const Body = () => {
  const location = useLocation();

  return (
    <div className="">
      <div className="sticky top-0 bg-white z-50">
        <Header />
      </div>
      <div className={`${location.pathname=='/'?'flex':''}`}>
        <div className="">
          <Sidebar />
        </div>
        <div className='ml-12'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
