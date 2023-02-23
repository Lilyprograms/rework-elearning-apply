import { Link } from "react-router-dom";
import img from "../../assets/images/hs9-img.png";

function HomeSection9() {
  return (
    <div className="home_section9">
      <div className="hs9--content container">
        <div className="hs9--grid grids">
          <div className="hs9--left">
            <div className="hgrid--content hgrid--content1">
              <h2>Need a new career? We’ve got you</h2>
              <p>
                You don't need prior knowledge or technical skills to participate in any of our programs. Our curriculum
                is designed to give you the perfect leg up when transitioning to a career in tech.
              </p>
              <Link to="/" className="btns-primary">
                Explore courses
              </Link>
            </div>
          </div>
          <div className="hs9--right">
            <div className="hgrid--content_img">
              <img src={img} alt="Career Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection9;
