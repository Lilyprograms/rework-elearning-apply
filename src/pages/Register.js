import React, { useState } from "react";
import axios from "axios";
import { AllContext } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import { IoReloadSharp, IoCloseSharp } from "react-icons/io5";

function Register() {
  const { setVerifyAuth, setVerifyId, setVerifyEmail, url } = AllContext();
  const navigate = useNavigate();

  const data = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    passwd: "",
    batch: "TEST 1",
  };
  const [reg, setReg] = useState(data);
  const [errMsg, setErrMsg] = useState(false);
  const [errReg, setErrReg] = useState("");
  const [load, setLoad] = useState(false);
  // const [networkErr, setNetworkErr] = useState(false);
  const saveData = [...Object.values(reg)].every(Boolean);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let val = value.trim();
    setReg((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    if (!saveData) {
      setErrMsg((err) => (err = true));
      return;
    }
    try {
      const resp = await axios.post(`${url}/self-pace/register`, reg);
      if (resp.data.type !== "SUCCESS") {
        console.log("Registration failed", resp);
        setLoad(false);
        setErrReg(resp.data.msg);
        return;
      }
      const { id } = resp.data.data;
      console.log("Registration succesfull", resp);
      setErrReg("");
      setVerifyAuth(true);
      sessionStorage.setItem("currentlyLogged", reg.email);
      setLoad(false);
      setVerifyEmail(reg.email);
      setVerifyId(id);
      setReg(data);
      navigate("/email/verify");
    } catch (error) {
      setErrReg(error.message);
      setLoad(false);
    }
  };

  return (
    <div className="reg__form-container">
      <div className="container spaceTop">
        <div className="reg__form-header">
          <h2>Create an account</h2>
        </div>
        <form action="POST" className="reg__form" onSubmit={handleSubmit}>
          <div className="reg__form-sub">
            <div className="reg__form-control">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                name="first_name"
                className={errMsg && reg.first_name === "" ? "form_error" : ""}
                onChange={handleChange}
                value={reg.first_name}
                required
              />
              {errMsg && reg.first_name === "" ? <span>Field Required</span> : null}
            </div>
            <div className="reg__form-control">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" name="last_name" className={errMsg && reg.last_name === "" ? "form_error" : ""} onChange={handleChange} value={reg.last_name} required />
              {errMsg && reg.last_name === "" ? <span>Field Required</span> : null}
            </div>
          </div>
          <div className="reg__form-control">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="phone" className={errMsg && reg.phone === "" ? "form_error" : ""} onChange={handleChange} value={reg.phone} required />
            {errMsg && reg.phone === "" ? <span>Field Required</span> : null}
          </div>
          <div className="reg__form-control">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className={errMsg && reg.email === "" ? "form_error" : ""} onChange={handleChange} value={reg.email} required />
            {errMsg && reg.email === "" ? <span>Invalid Email Address</span> : null}
          </div>
          <div className="reg__form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="passwd" className={errMsg && reg.passwd === "" ? "form_error" : ""} onChange={handleChange} value={reg.passwd} required />
            {errMsg && reg.passwd === "" ? <span>Password must be at least 8 characters</span> : null}
          </div>
          <div className="reg__terms">
            <p>
              By signing up, I understand and agree to Rework Academy's <a href="/">Terms of Service</a>
            </p>
          </div>
          <div className="reg__form-btn">
            <button>{load ? <IoReloadSharp className="form-spinner" /> : "Submit"}</button>
          </div>
        </form>
        {errReg && (
          <div className="err_form_msg">
            <span>{errReg}</span>
            <button className="err_form_msg_btn" onClick={() => setErrReg("")}>
              <IoCloseSharp />
            </button>
          </div>
        )}
      </div>
      <div className="space"></div>
    </div>
  );
}

export default Register;
