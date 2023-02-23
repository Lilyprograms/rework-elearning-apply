import CDBanner from "../components/courseDetails/CDBanner";
import "../assets/styles/CourseDetails.css";
import CDSection1 from "../components/courseDetails/CDSection1";
import HomeSection8 from "../components/home/HomeSection8";

function CourseDetails() {
  return (
    <div className="course_details">
      <CDBanner />
      <CDSection1 />
      <HomeSection8 />
    </div>
  );
}

export default CourseDetails;
