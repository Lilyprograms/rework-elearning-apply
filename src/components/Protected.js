import { Navigate } from "react-router-dom";

function Protected({ verifyAuth, children }) {
  if (verifyAuth) {
    return children;
  } else {
    sessionStorage.clear();
    return <Navigate to="/login" />;
  }
}

export default Protected;
