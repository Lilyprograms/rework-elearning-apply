import img from "../../assets/images/hs6-img.png";
import HGridSection from "./HGridSection";

function HomeSection6() {
  return (
    <div className="home_section">
      <div className="hs6--content container">
        <div className="hs6--header">
          <h2>The Rework Experience</h2>
        </div>
        <HGridSection
          LT_header="A Collaborative Experience"
          LT1=" Learning to code on your own can be lonely and difficult. At Rework, you’ll join one of the most
              collaborative and social learning communities in the world."
          LT2="Throughout the program, you'll learn through collaborating with your peers in daily meetings, group
              projects, and remote pair programming."
          Rimg={img}
        />
      </div>
    </div>
  );
}

export default HomeSection6;
