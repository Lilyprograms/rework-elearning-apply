import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/ResetPassword.css";
import { AllContext } from "../contexts/DataContext";
import { IoReloadSharp } from "react-icons/io5";

function ResetPassword() {
  const { verifyEmail, url } = AllContext();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState(false);
  const [errResetP, setErrResetP] = useState("");
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    email: verifyEmail,
    code: "",
    passwd: "",
  });
  const [confirm_passwd, setConfirmPasswd] = useState("");
  const saveData = [...Object.values(data)].every(Boolean);

  const handleInput = (e) => {
    const { name, value } = e.target;
    let val = value.trim();
    setData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
    if (name === "confirm_passwd") {
      setConfirmPasswd(val);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    if (confirm_passwd !== data.passwd) {
      setErrMsg((err) => (err = true));
      return;
    }
    if (!saveData) {
      setErrMsg((err) => (err = true));
      return;
    }
    try {
      const resp = await axios.post(`${url}/accounts/reset-passwd`, data);
      if (resp.data.type !== "SUCCESS") {
        console.log("Password Reset Failed", resp);
        setErrResetP(resp.data.msg);
        setLoad(false);
        return;
      }
      setErrResetP("");
      setLoad(false);
      navigate("/login");
    } catch (error) {
      setErrResetP("Sorry, Cannot complete Operation, try again.");
      throw Error(error);
    }
  };
  return (
    <div className="reg__form-container">
      <div className="container spaceTop">
        <div className="reg__form-header">
          <h2>Change Password</h2>
        </div>
        <div className="reset__PWD-bg">
          <div className="reset_veri_code">Password Reset code was sent to your email</div>
          <form onSubmit={handleSubmit}>
            <div className="reg__form-control">
              <label htmlFor="code">Enter password reset code</label>
              <input type="text" name="code" required value={data.code} onChange={handleInput} className={errMsg && data.code === "" ? "form_error" : ""} />
            </div>
            <div className="reg__form-control">
              <label htmlFor="passwd">Password</label>
              <input type="text" name="passwd" required value={data.passwd} onChange={handleInput} className={errMsg && data.passwd === "" ? "form_error" : ""} />
            </div>
            <div className="reg__form-control">
              <label htmlFor="confirm_passwd">Confirm Password</label>
              <input
                type="text"
                name="confirm_passwd"
                value={confirm_passwd}
                onChange={handleInput}
                className={errMsg && confirm_passwd !== data.passwd ? "form_error" : ""}
              />
              {errMsg && confirm_passwd !== data.passwd ? <span>Passwords do not match</span> : null}
            </div>
            <div className="reg__form-btn">
              <button>{load ? <IoReloadSharp className="form-spinner" /> : "Submit"}</button>
            </div>
          </form>
          {errResetP && (
            <div className="err_form_msg">
              <span>{errResetP}</span>
              <button className="err_form_msg_btn" onClick={() => setErrResetP("")}>
                x
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
