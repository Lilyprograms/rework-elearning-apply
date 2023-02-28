import AboutBanner from "../components/about/AboutBanner";
import "../assets/styles/About.css";
import AboutSect1 from "../components/about/AboutSect1";
import AboutSect2 from "../components/about/AboutSect2";
import WhyChooseUs from "../components/about/WhyChooseUs";
import AboutSect4 from "../components/home/HomeSection8";
import AboutSect5 from "../components/home/HomeSection9";

function About() {
  return (
    <div>
      <AboutBanner />
      <AboutSect1 />
      <AboutSect2 />
      <WhyChooseUs />
      <AboutSect4 />
      <AboutSect5 />
    </div>
  );
}

export default About;
