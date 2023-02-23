import checkbox from "../../assets/images/checkbox.png";

function CDSection3() {
  return (
    <div className="cd_section3">
      <div className="cd_section-content">
        <div className="CD--overview">
          <h2>Learn at your Own Pace</h2>
          <p className="CD--overview-text1">
            Rework’s Full Stack Web Development program is a live course, online, that adjusts to your schedule and your
            pace. Combined with hands-on experience, on-demand learning, and personalised support, you get education
            that truly works. How you complete our 960-hour course is up to you.
          </p>
        </div>
        <div className="cd_s2--list">
          <div className="cd_s2--list-item flexed1">
            <img src={checkbox} alt="Checkbox" />
            <p>Choose from live classes 7 days a week</p>
          </div>
          <div className="cd_s2--list-item flexed1">
            <img src={checkbox} alt="Checkbox" />
            <p>Deepen your knowledge with always-accessible pre-recorded lessons</p>
          </div>
          <div className="cd_s2--list-item flexed1">
            <img src={checkbox} alt="Checkbox" />
            <p>Work with a team to develop real products, on your schedule</p>
          </div>
          <div className="cd_s2--list-item flexed1">
            <img src={checkbox} alt="Checkbox" />
            <p>Tap into academic and career support to get unblocked, anytime</p>
          </div>
          <div className="cd_s2--list-item flexed1">
            <img src={checkbox} alt="Checkbox" />
            <p>Work through the program at your own pace with Rework to guide you</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CDSection3;
