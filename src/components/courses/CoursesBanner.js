import img1 from "../../assets/images/instructor-led.svg";
import { IoTimeOutline } from "react-icons/io5";

export default function CoursesBanner() {
  return (
    <>
      <div className="courses_banner">
        <div className="space-top container CO__banner-cont">
          <div className="CO__banner">
            <h2>All courses carefully designed and structured to provide the highest quality.</h2>
            <div className="CO__banner-subs">
              <div className="CO__banner-sub">
                <img src={img1} alt="Instructor Led" className="CO__banner-icon1" />
                <span>Instructor led</span>
              </div>
              <div className="CO__banner-sub">
                <IoTimeOutline className="CO__banner-icon2" />
                <span>Self-Paced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CO__pills container">
        <div className="CO__pill active_pill">All</div>
        <div className="CO__pill">Full Stack Web Development</div>
        <div className="CO__pill">Frontend Development</div>
      </div>
    </>
  );
}
