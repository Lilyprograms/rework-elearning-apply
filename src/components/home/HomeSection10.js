import { Link } from "react-router-dom";
import img from "../../assets/images/hs10-img.png";

function HomeSection10() {
  return (
    <div className="home_section10">
      <div className="hs10--content container">
        <div className="hs10--grid grids">
          <div className="hs10--left">
            <div className="hgrid--content_img">
              <img src={img} alt="Career" />
            </div>
          </div>
          <div className="hs10--right">
            <div className="hgrid--content hgrid--content2">
              <h2>Partner with us</h2>
              <p>
                Interested in inspiring the next generation of top tech talent? Collaborate with us. We are committed to
                helping as many young Africans kickstart a career in technology by providing them with access to quality
                technical education by real world experts.
              </p>
              <Link to="/partnership" className="btns-primary">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection10;
