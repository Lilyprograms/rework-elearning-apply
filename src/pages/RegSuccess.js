import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function RegSuccess() {
  return (
    <div className="reg__form-container">
      <div className="container spaceTop">
        <div className="reg__success">
          <IoCheckmarkCircleSharp className="reg__success-img" />
          <h2>Congratulations!</h2>
          <p>Your Application is completed. An email has been sent to you with details on the next step.</p>
          <p>If you did not recieve an email, kindly login for access</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default RegSuccess;
