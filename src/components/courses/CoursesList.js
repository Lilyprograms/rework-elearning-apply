import { useState } from "react";
import { IoLogoReact, IoLogoNodejs, IoTimeOutline, IoChevronForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function CoursesList() {
  const [courses] = useState([
    {
      id: 1,
      icon: IoLogoNodejs,
      title: "Full Stack Web Development with Node JS",
      duration: "12 months",
      description:
        "Become a full stack web developer with  javascript (React/Node). This online course will introduce the MERN Stack for building full stack applications.",
    },
    {
      id: 2,
      icon: IoLogoReact,
      title: "Frontend Development with React JS",
      duration: "9 months",
      description:
        "Become a frontend web developer with  javascript (React). This online course will introduce the MERN Stack for building Frontend applications.",
    },
  ]);
  return (
    <div className="space-top container">
      <div className="CO__lists">
        {courses.map((course) => (
          <div key={course.id} className="CO__list">
            <div className="CO_icon-container">
              <course.icon className="CO__icon" />
            </div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <span className="CO__duration">
              <IoTimeOutline className="CO__duration-icon" />
              {course.duration}
            </span>
            <div className="CO__apply-btns">
              <Link to="/courses/details">See Details</Link>
              <div className="CO__apply-icon-cont">
                <IoChevronForwardCircleOutline className="CO__apply-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesList;
