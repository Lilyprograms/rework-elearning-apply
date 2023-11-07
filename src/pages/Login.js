import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AllContext } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import { IoReloadSharp, IoCloseSharp } from "react-icons/io5";

function Login() {
  let navigate = useNavigate();
  const { url, setVerifyAuth, setVerifyEmail, setVerifyId, setQuizLink, setLoggedIn } = AllContext();
  const [load, setLoad] = useState(false);
  const [errLogin, setErrLogin] = useState("");
  const [login, setLogin] = useState({
    username: "",
    passwd: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const saveData = [...Object.values(login)].every(Boolean);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    if (!saveData) {
      setErrMsg((err) => (err = "Invalid email or password"));
      return;
    }
    try {
      const resp = await axios.post(`${url}/auth/login`, login);
      if (resp.data.type !== "SUCCESS") {
        console.log("Login failed", resp);
        setErrLogin(resp.data.msg);
        setLoad(false);
        return;
      }
      const { reg_status, id, email, quiz_link, has_passed_quiz } = resp.data.data;
      setLoad(false);
      setErrLogin("");
      console.log("Successful", resp);
      setLoggedIn(true);

      if (reg_status === "VERIFICATION") {
        setVerifyAuth(true);
        setVerifyEmail(email);
        sessionStorage.setItem("currentlyLogged", email);
        navigate("/email/verify");
      }
      if (reg_status === "PERSONAL") {
        setVerifyEmail(email);
        setVerifyAuth(true);
        sessionStorage.setItem("currentlyLogged", email);
        setVerifyId(id);
        navigate("/apply/personal-details");
      }
      if (reg_status === "COURSE") {
        setVerifyEmail(email);
        setVerifyAuth(true);
        sessionStorage.setItem("currentlyLogged", email);
        setVerifyId(id);
        navigate("/apply/course-details");
      }
      if (reg_status === "COMPLETED") {
        setVerifyAuth(true);
        setQuizLink(quiz_link);
        sessionStorage.setItem("currentlyLogged", email);
        setVerifyEmail(email);
        if (has_passed_quiz === false) {
          setVerifyAuth(true);
          sessionStorage.setItem("quiz", quiz_link);
          navigate("/navigate/quiz");
        } else {
          sessionStorage.removeItem("quiz");
          setVerifyAuth(true);
          navigate("/navigate/portal");
        }
      }
    } catch (error) {
      setErrLogin(error.message);
      setLoad(false);
    }
  };

  return (
    <div className="reg__form-container">
      <div className="container spaceTop">
        <div className="reg__form-header">
          <h2>Welcome Back</h2>
        </div>
        <form className="reg__form" onSubmit={handleSubmit}>
          <div className="reg__form-control">
            <label htmlFor="email">Email</label>
            <input type="text" name="username" className={errMsg && login.username === "" ? "form_error" : ""} onChange={handleChange} required />
          </div>
          <div className="reg__form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="passwd" required className={errMsg && login.passwd === "" ? "form_error" : ""} onChange={handleChange} />
          </div>
          {(errMsg && login.username === "") || (errMsg && login.passwd === "") ? <div className="error_msg">Invalid Email address or password</div> : null}

          <div className="reg__terms">
            <p>
              Forgot password? <Link to="/reset-password">Reset Password</Link>
            </p>
          </div>
          <div className="reg__form-btn">
            <button>{load ? <IoReloadSharp className="form-spinner" /> : "Submit"}</button>
          </div>
        </form>
        {errLogin && (
          <div className="err_form_msg">
            <span>{errLogin}</span>
            <button className="err_form_msg_btn" onClick={() => setErrLogin("")}>
              <IoCloseSharp />
            </button>
          </div>
        )}
        <div className="reg__form-create-acc">
          <p>
            Don't have an account? <Link to="/">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
