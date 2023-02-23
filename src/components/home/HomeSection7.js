import img from "../../assets/images/hs7-img.png";

function HomeSection7() {
  return (
    <div className="home_section7">
      <div className="h_grid--content container">
        <div className="grid1">
          <div className="h_grid--right">
            <img src={img} alt="Collaborative Learning" />
          </div>
          <div className="h_grid--left hs7--right">
            <h2>Supportive learning Environment</h2>
            <p>
              Besides your peers, you'll have our student success team, a student mentor, and a personal career coach,
              to support you on your journey.
            </p>
            <p>
              From project reviews and answering tough questions, to helping you negotiate job offers and prepare for
              interviews, you'll be in good company as you go through the program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection7;
