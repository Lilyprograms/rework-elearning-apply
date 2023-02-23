import img from "../../assets/images/course-video-bg.png";
import CDSection1Right from "./CDSection1Right";
import CDSection2 from "./CDSection2";
import CDSection3 from "./CDSection3";
import CDSection4 from "./CDSection4";

function CDSection1() {
  return (
    <div className="CD_section1">
      <div className="CD_s1--content container">
        <div className="CD_s1--grid">
          <div className="CD_s1--left">
            <div className="CD_s1--left-cont">
              <div className="CD_s1--left-list">
                <ul>
                  <li>Overview</li>
                  <li>Curriculumn</li>
                  <li>Tuition Options</li>
                  <li>Requirements</li>
                  <li>Admission Process</li>
                </ul>
              </div>
              <div className="CD_s1--right-video">
                <img src={img} alt="Full Stack Video" />
              </div>
              <div className="CD--overview">
                <h2>Course Overview</h2>
                <p className="CD--overview-text1">
                  Rework Academy 12 months Coding Classes is your path to becoming an experienced Full-Stack Web
                  Developer. With Curriculum designed to take you from Zero to Advanced Coding Skill and Flexible
                  monthly payment plan. Rework Academy is creating employable Skilled talents.
                </p>
                <p className="CD--overview-text1">
                  Our curriculum is structured to take you from zero skill level in coding to advanced skill. Our Full
                  Stack web development program will enable students to create complete web application covering
                  front-end, data layer, and back-end. Also Model Database, Creating Restful API writing well structured
                  and effective codes through proper understanding of Data Structure and Algorithms
                </p>
                <h6>Quick fact</h6>
                <p className="CD--overview-text1">
                  Programming and coding has been identified as one of the skills for the future of work, according to a
                  2021 report by the World Economic Forum. computer programming and software engineering is one of the
                  most high-profile jobs in the tech industry today. Companies are looking for software engineering
                  talent - whether that's as a graduate or as a senior hire.
                </p>
                <h3>$85,000</h3>
                <h5>Average salary of a Computer Programmer</h5>
                <span>Source: Glassdor</span>
              </div>
              <CDSection2 />
              <CDSection3 />
              <CDSection4 />
            </div>
          </div>
          <CDSection1Right />
        </div>
      </div>
    </div>
  );
}

export default CDSection1;
