import { useState, createContext } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [dropNav, setDropNav] = useState(false);
  return (
    <>
      <DataContext.Provider value={{ dropNav, setDropNav }}>{children}</DataContext.Provider>
    </>
  );
}
export default DataProvider;
