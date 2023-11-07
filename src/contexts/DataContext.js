import { useState, createContext, useContext, useEffect } from "react";

export const DataContext = createContext();
export const AllContext = () => useContext(DataContext);

function DataProvider({ children }) {
  const [dropNav, setDropNav] = useState(false);
  const [verifyAuth, setVerifyAuth] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [verifyId, setVerifyId] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [quizLink, setQuizLink] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(() => {
  //   const localVal = sessionStorage.getItem("currentlyLogged");
  //   if (localVal == null) return "";
  //   return localVal;
  // });
  let isLoggedIn = sessionStorage.getItem("currentlyLogged");

  useEffect(() => {
    if (verifyEmail) {
      sessionStorage.setItem("currentlyLogged", verifyEmail);
    }
    if (isLoggedIn) {
      setVerifyEmail(isLoggedIn);
    }
  }, []);

  const url = "https://reworkacademy.co/app/v2";
  return (
    <>
      <DataContext.Provider
        value={{
          dropNav,
          setDropNav,
          verifyAuth,
          setVerifyAuth,
          url,
          verifyEmail,
          setVerifyEmail,
          verifyId,
          setVerifyId,
          resetEmail,
          setResetEmail,
          isLoggedIn,
          quizLink,
          setQuizLink,
          setLoggedIn,
          loggedIn,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
}
export default DataProvider;
