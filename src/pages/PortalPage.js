import "../assets/styles/PortalPage.css";
import img from "../assets/images/Spreadsheets.svg";

export const PortalPage = () => {
  return (
    <div className="portalPageContainer ">
      <div className="PP__container">
        <div className="PP__img">
          <img src={img} alt="Welcome Back" />
        </div>
        <div className="PP__right">
          <div className="PP__content">
            <h2>Your registration is completed</h2>
            <h2>kindly proceed to the eLearning-portal</h2>
            <a href="http://portal.reworkacademy.co/" target="_blank" rel="noopener noreferrer">
              Portal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
