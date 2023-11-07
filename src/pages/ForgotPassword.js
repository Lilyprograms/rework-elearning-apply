import { useState } from "react";
import { AllContext } from "../contexts/DataContext";
import "../assets/styles/ResetPassword.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const { url, setVerifyAuth, setVerifyEmail } = AllContext();
  const [errforgotP, setErrforgotP] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    // setLoad(true);
    e.preventDefault();
    if (!data.email) {
      console.log("Value Required");
      return;
    }
    try {
      const resp = await axios.post(`${url}/accounts/forget-passwd`, data);
      if (resp.data.type !== "SUCCESS") {
        console.log("Reset Password failed", resp);
        setLoad(false);
        setErrforgotP(resp.data.msg);
        return;
      }
      console.log("Successful", resp);
      setErrforgotP("");
      setLoad(false);
      setVerifyAuth(true);
      sessionStorage.setItem("currentlyLogged", data.email);
      setVerifyEmail(data.email);
      navigate("/verify-password");
    } catch (error) {
      throw Error(error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    let val = value.trim();
    setData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  return (
    <div className="reg__form-container">
      <div className="container spaceTop">
        <div className="reg__form-header">
          <h2>Reset Password</h2>
        </div>
        <div className="reset__PWD-bg">
          <form onSubmit={handleSubmit}>
            <div className="pwd__reset-header">
              <p>Enter the email address you registered with, and we will send you a password reset code.</p>
            </div>
            <div className="reg__form-control">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" required value={data.email} onChange={handleInput} />
            </div>
            <div className="reg__form-btn">
              <button>{load ? "Please wait...." : "Submit"}</button>
            </div>
          </form>
          {errforgotP && (
            <div className="err_form_msg">
              <span>{errforgotP}</span>
              <button className="err_form_msg_btn" onClick={() => setErrforgotP("")}>
                x
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
