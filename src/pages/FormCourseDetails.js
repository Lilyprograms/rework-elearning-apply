import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplyImg from "../images/register-img.png";
import "../assets/styles/PersonalDetails.css";
import { AllContext } from "../contexts/DataContext";
import { IoCloseSharp, IoReloadSharp } from "react-icons/io5";

function FormCourseDetails() {
  const { verifyId, setVerifyAuth, url } = AllContext();
  const [load, setLoad] = useState(false);
  const [errRegCourse, setErrRegCourse] = useState("");
  const navigate = useNavigate();
  const data = {
    reg_status: "COURSE",
    assessment_date: "",
    hear_about_us: "",
    more_about_you: "",
    ref_code: "",
    course_manager_id: "",
  };
  const [reg, setReg] = useState(data);
  const [errMsg, setErrMsg] = useState(false);
  const { ref_code, ...requiredData } = reg;
  const saveData = [...Object.values(requiredData)].every(Boolean);

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
      return;
    }
    try {
      const resp = await axios.put(`${url}/self-pace/${verifyId}/register`, reg);
      if (resp.data.type !== "SUCCESS") {
        console.log("Registration failed");
        setLoad(false);
        console.log(resp);
        return;
      }
      console.log("Registration succesfull", resp);
      setLoad(false);
      setVerifyAuth(true);
      setReg(data);
      navigate("/apply/success");
    } catch (error) {
      console.log(error);
      setLoad(false);
      setErrRegCourse("Sorry, Cannot Complete Registration, Try Again.");
    }
  };

  return (
    <div className="reg__form-container">
      <div className="container spaceTop">
        <div className="reg__form-header">
          <h2>Course Details</h2>
          <p>Complete your registration</p>
        </div>
        <div className="form__PD-grid">
          <div className="reg__form-CD-img">
            <img src={ApplyImg} alt="" className="reg__form-header-img" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="reg__form-control">
              <label htmlFor="course_manager_id">Course*</label>
              <select
                name="course_manager_id"
                value={reg.course_manager_id}
                onChange={handleChange}
                className={errMsg && reg.course_manager_id === "" ? "form_error" : ""}
              >
                <option value="">Select</option>
                <option value="5vc6wbdhpkz6rxwk6">Front-End Development with React</option>
                <option value="5vc6wbdhpkz6rnud8">Full Stack Web Development with NodeJs</option>
              </select>
              {errMsg && reg.course_manager_id === "" ? <span>Choose Preferred Course</span> : null}
            </div>
            <div className="reg__form-control">
              <label htmlFor="assessment_date">Assessment Date*</label>
              <select name="assessment_date" onChange={handleChange} value={reg.assessment_date} className={errMsg && reg.assessment_date === "" ? "form_error" : ""}>
                <option value="">Select</option>
                <option value="13th March 2023 - 17th March 2023">13th March 2023 - 17th March 2023</option>
                <option value="20th March 2023 - 24th march 2023">20th March 2023 - 24th march 2023</option>
                <option value="27th March 2023 - 31st March 2023">27th March 2023 - 31st March 2023</option>
              </select>
              {errMsg && reg.assessment_date === "" ? <span>Assessment-Date Field Required</span> : null}
            </div>
            <div className="reg__form-control">
              <label htmlFor="hear_about_us">How did you hear about us?</label>
              <input
                type="text"
                name="hear_about_us"
                className={errMsg && reg.hear_about_us === "" ? "form_error" : ""}
                onChange={handleChange}
                value={reg.hear_about_us}
              />
              {errMsg && reg.hear_about_us === "" ? <span>Field Required</span> : null}
            </div>
            <div className="reg__form-control">
              <label htmlFor="ref_code">Referral Code (optional)</label>
              <input type="text" name="ref_code" onChange={handleChange} value={reg.ref_code} />
            </div>
            <div className="reg__form-control">
              <label htmlFor="more_about_you">Why do you want to join the program?</label>
              <textarea
                name="more_about_you"
                className={errMsg && reg.more_about_you === "" ? "form_error" : ""}
                onChange={handleChange}
                value={reg.more_about_you}
              ></textarea>
              {errMsg && reg.more_about_you === "" ? <span>Occupation Field Required</span> : null}
            </div>
            <div className="reg__form-btn">
              <button>{load ? <IoReloadSharp className="form-spinner" /> : "Submit"}</button>
            </div>
          </form>
          {errRegCourse && (
            <div className="err_form_msg">
              <span>{errRegCourse}</span>
              <button className="err_form_msg_btn" onClick={() => setErrRegCourse("")}>
                <IoCloseSharp />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
}

export default FormCourseDetails;
