import axios from "axios";
import { useState } from "react";
import { IoLockClosed, IoReloadSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "../assets/styles/VerifyEmail.css";
import { AllContext } from "../contexts/DataContext";

export default function VerifyEmail() {
  const { url, setVerifyAuth, isLoggedIn } = AllContext();
  let navigate = useNavigate();
  let [userInput, setUserInput] = useState("");
  let [expiredCode, setExpiredCode] = useState(false);
  const [codeErr, setCodeErr] = useState(false);
  const [load, setLoad] = useState(false);
  let val;
  const data = {
    email: isLoggedIn,
    code: userInput,
  };
  const resendVerifyCode = {
    email: isLoggedIn,
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoad(true);
    if (userInput.length < 6) {
      setCodeErr(true);
      setLoad(false);
      return;
    }
    try {
      const resp = await axios.post(`${url}/self-pace/verify`, data);
      if (resp.data.type !== "SUCCESS") {
        console.log(resp.data.msg);
        if (resp.data.type === "EXPIRED") {
          setExpiredCode(true);
          return;
        }
        return;
      }
      console.log("Verification succesfull", resp);
      setLoad(false);
      setVerifyAuth(true);
      navigate("/apply/personal-details");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    val = e.target.value;
    setUserInput((prev) => (prev = val));
  };

  const resendCode = async (e) => {
    e.preventDefault();
    setExpiredCode(false);
    try {
      console.log(resendVerifyCode);
      const resp = await axios.post(`${url}/self-pace/resend-code`, resendVerifyCode);
      if (resp.data.type !== "SUCCESS") {
        return;
      }
      console.log("Verification sent", resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="reg__form-container">
      <div className="verify__email spaceTop">
        <form className="verifyForm" onSubmit={submitForm}>
          <div className="verifyHeader">
            <div className="verifyHeader__icons">
              <IoLockClosed className="verifyHeader__icon" />
            </div>
            <h2>Verify your email</h2>
            <p>A 6 digit verification code has been sent to your email.</p>
          </div>
          <div className="verify__boxes">
            <input type="text" placeholder="xxxxxx" maxLength={6} title="Verification code must be 6 characters" onChange={handleInput} required />
            {codeErr && userInput.length < 6 ? <span>Incorrect Verification Code</span> : null}
          </div>
          {expiredCode ? <div className="expiredcode_msg">Verification Code Expired. Try resending Code</div> : null}
          <div className="otp_verification">
            Did not recieve verification code? <button onClick={resendCode}>Resend</button>
          </div>
          <div className="verify__email-btn">
            <button>{load ? <IoReloadSharp className="form-spinner" /> : "Submit"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
