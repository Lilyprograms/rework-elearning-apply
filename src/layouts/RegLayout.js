import React from "react";
import { Outlet } from "react-router-dom";
import RegFooter from "./RegFooter";
import RegHeader from "./RegHeader";

const RegLayout = () => {
  return (
    <>
      <RegHeader />
      <main>
        <Outlet />
      </main>
      <RegFooter />
    </>
  );
};

export default RegLayout;
