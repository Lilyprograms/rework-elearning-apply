import React from "react";
import App from "./App";
import DataProvider from "./contexts/DataContext";

function Wrapper() {
  return (
    <DataProvider>
      <App />
    </DataProvider>
  );
}

export default Wrapper;
