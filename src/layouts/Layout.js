import React from "react";
import { Outlet } from "react-router-dom";
import Header2 from "./Header2";

const Layout = () => {
  return (
    <>
      <Header2 />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
