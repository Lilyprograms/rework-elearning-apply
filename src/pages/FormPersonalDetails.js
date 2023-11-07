import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllContext } from "../contexts/DataContext";
import ApplyImg from "../images/register-img.png";
import { IoReloadSharp } from "react-icons/io5";
import "../assets/styles/PersonalDetails.css";

function FormPersonalDetails() {
  const { setVerifyAuth, verifyId, url } = AllContext();
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const data = {
    reg_status: "PERSONAL",
    gender: "",
    state: "",
    program_level: "",
    country: "",
    occupation: "",
    birth_date: "",
  };
  const [reg, setReg] = useState(data);
  const [errMsg, setErrMsg] = useState(false);
  const saveData = [...Object.values(reg)].every(Boolean);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReg((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    if (!saveData) {
      setErrMsg((err) => (err = true));
      setLoad(false);
      return;
    }
    try {
      const resp = await axios.put(`${url}/self-pace/${verifyId}/register`, reg);
      console.log(reg);
      if (resp.data.type !== "SUCCESS") {
        console.log("Registration failed");
        console.log(resp);
        return;
      }
      console.log("Registration succesfull", resp);
      setLoad(false);
      setVerifyAuth(true);
      setReg(data);
      navigate("/apply/course-details");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="reg__form-container">
      <div className="container spaceTop">
        <div className="reg__form-header">
          <h2>Personal Details</h2>
          <p>Proceed with your registration</p>
        </div>
        <div className="form__PD-grid">
          <div className="form__PD-grid-img">
            <img src={ApplyImg} alt="" className="reg__form-header-img" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="reg__form-sub">
              <div className="reg__form-control">
                <label htmlFor="gender">Gender*</label>
                <select name="gender" value={reg.gender} onChange={handleChange} className={errMsg && reg.gender === "" ? "form_error" : ""}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errMsg && reg.gender === "" ? <span>Gender Field Required</span> : null}
              </div>
              <div className="reg__form-control">
                <label htmlFor="birth_date">Date of birth*</label>
                <input type="date" name="birth_date" className={errMsg && reg.birth_date === "" ? "form_error" : ""} onChange={handleChange} value={reg.birth_date} />
                {errMsg && reg.birth_date === "" ? <span>DOB Field Required</span> : null}
              </div>
            </div>
            <div className="reg__form-control">
              <label htmlFor="country">Country</label>
              <input type="text" name="country" className={errMsg && reg.country === "" ? "form_error" : ""} onChange={handleChange} value={reg.country} />
              {errMsg && reg.country === "" ? <span>Country Field Required</span> : null}
            </div>
            <div className="reg__form-control">
              <label htmlFor="state">State</label>
              <input type="text" name="state" className={errMsg && reg.state === "" ? "form_error" : ""} onChange={handleChange} value={reg.state} />
              {errMsg && reg.state === "" ? <span>State field required</span> : null}
            </div>
            <div className="reg__form-control">
              <label htmlFor="occupation">Occupation</label>
              <select name="occupation" value={reg.occupation} onChange={handleChange} className={errMsg && reg.occupation === "" ? "form_error" : ""}>
                <option value="">Select</option>
                <option value="Student">Student</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Employed (Part time)">Employed (Part time)</option>
                <option value="Employee(Full time)">Employee(Full time)</option>
              </select>
              {errMsg && reg.occupation === "" ? <span>Occupation Field Required</span> : null}
            </div>
            <div className="reg__form-control">
              <label htmlFor="program_level">Programming Level</label>
              <select name="program_level" value={reg.program_level} onChange={handleChange} className={errMsg && reg.program_level === "" ? "form_error" : ""}>
                <option value="">Select</option>
                <option value="Novice">Novice</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Professional">Professional</option>
              </select>
              {errMsg && reg.program_level === "" ? <span>Program-Level Field Required</span> : null}
            </div>
            <div className="reg__form-btn">
              <button>{load ? <IoReloadSharp className="form-spinner" /> : "Submit"}</button>
            </div>
          </form>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
}

export default FormPersonalDetails;
