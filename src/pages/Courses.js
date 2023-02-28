import "../assets/styles/Courses.css";
import CoursesBanner from "../components/courses/CoursesBanner";
import CoursesList from "../components/courses/CoursesList";
import FooterSub from "../layouts/FooterSub";

function Courses() {
  return (
    <>
      <CoursesBanner />
      <CoursesList />
      <FooterSub />
    </>
  );
}

export default Courses;
