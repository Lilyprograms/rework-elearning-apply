import img1 from "../../assets/images/hs8-img1.png";
import img2 from "../../assets/images/hs8-img2.png";
import img3 from "../../assets/images/hs8-img3.png";
import img4 from "../../assets/images/hs8-img4.png";

function HomeSection8() {
  return (
    <div className="home_section8">
      <div className="hs8--content container">
        <div className="hs8--header">
          <h3>How the Application Process Works</h3>
          <p>The application process follows due procedures, and below are the requirements for applying.</p>
        </div>
        <div className="hs8--hit-content">
          <div className="hs8--hit">
            <img src={img1} alt="Application Process" />
            <p>Fill and submit the application form</p>
          </div>
          <div className="hs8--hit">
            <img src={img2} alt="Application Process" />
            <p>Attend 2 week Virtual pre-assessment classes</p>
          </div>
          <div className="hs8--hit">
            <img src={img3} alt="Application Process" />
            <p>Take and pass assessment tests</p>
          </div>
          <div className="hs8--hit">
            <img src={img4} alt="Application Process" />
            <p>Complete enrolment and begin your journey into tech</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection8;
