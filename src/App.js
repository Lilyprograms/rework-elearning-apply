import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./layouts/ScrollToTop";
import RegLayout from "./layouts/RegLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import ErrorPage from "./pages/ErrorPage";
import Protected from "./components/Protected";
import { AllContext } from "./contexts/DataContext";
import FormPersonalDetails from "./pages/FormPersonalDetails";
import FormCourseDetails from "./pages/FormCourseDetails";
import "./assets/styles/Registration.css";
import RegSuccess from "./pages/RegSuccess";
import ResetPassword from "./pages/ResetPassword";
import { PortalPage } from "./pages/PortalPage";
import { QuizPage } from "./pages/QuizPage";

function App() {
  const { verifyAuth } = AllContext();
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<RegLayout />}>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
          <Route
            path="/email/verify"
            element={
              <Protected verifyAuth={verifyAuth}>
                <VerifyEmail />
              </Protected>
            }
          />
          <Route
            path="/apply/personal-details"
            element={
              <Protected verifyAuth={verifyAuth}>
                <FormPersonalDetails />
              </Protected>
            }
          />
          <Route
            path="/apply/course-details"
            element={
              <Protected verifyAuth={verifyAuth}>
                <FormCourseDetails />
              </Protected>
            }
          />
          <Route
            path="/apply/success"
            element={
              <Protected verifyAuth={verifyAuth}>
                <RegSuccess />
              </Protected>
            }
          />
          <Route
            path="/verify-password"
            element={
              <Protected verifyAuth={verifyAuth}>
                <ResetPassword />
              </Protected>
            }
          />
          <Route
            path="/navigate/quiz"
            element={
              <Protected verifyAuth={verifyAuth}>
                <QuizPage />
              </Protected>
            }
          />
          <Route
            path="/navigate/portal"
            element={
              // <Protected verifyAuth={verifyAuth}>
              <PortalPage />
              // {/* </Protected> */}
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
