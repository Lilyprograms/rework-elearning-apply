import checkbox from "../../assets/images/checkbox.png";

function CDSection2() {
  return (
    <div className="cd_section2">
      <div className="cd_section-content">
        <div className="CD--overview">
          <h2>Curriculum</h2>
          <p className="CD--overview-text1">
            Our curriculum is structured to take you from zero skill level in coding to advanced skill. Our Full Stack
            web development program will enable students to create complete web application covering front-end, data
            layer, and back-end. Also Model Database, Creating Restful API writing well structured and effective codes
            through proper understanding of Data Structure and Algorithms
          </p>
        </div>
        <div className="cd_s2--list">
          <div className="cd_s2--list-item flexed1">
            <img src={checkbox} alt="Checkbox" />
            <p>Learn from expert instructors and hands-on assignments</p>
          </div>
          <div className="cd_s2--list-item flexed1">
            <img src={checkbox} alt="Checkbox" />
            <p>Work in teams to build real products for real clients</p>
          </div>
          <div className="cd_s2--list-item flexed1">
            <img src={checkbox} alt="Checkbox" />
            <p>Code along live with industry professionals</p>
          </div>
          <div className="cd_s2--list-item flexed1">
            <img src={checkbox} alt="Checkbox" />
            <p>Tap into academic and career support to get unblocked, anytime</p>
          </div>
          <div className="cd_s2--list-item flexed1">
            <img src={checkbox} alt="Checkbox" />
            <p>
              With our Full Stack Web Development program, you’ll learn the in-demand skills to kickstart your career,
              faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CDSection2;
