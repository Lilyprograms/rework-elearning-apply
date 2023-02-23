import React from "react";
import img1 from "../../assets/images/hs3-img1.svg";
import img2 from "../../assets/images/hs3-img2.svg";
import testiImg1 from "../../assets/images/Emmanuel-Omolewu.png";
import testiImg2 from "../../assets/images/Bright-Abu.png";
import testiImg3 from "../../assets/images/oji-innocent.jpg";

function HomeSection3() {
  const testimonials = [
    {
      id: 1,
      name: "Emmanuel Omolewu",
      title: "Rework Academy Student",
      img: testiImg1,
      text: "Rework Academy is, the best coding Bootcamp, without any iota of doubts. The rigorous curriculum, in depth projects, the personal mentorship, and high quality instructors really prepare students to go from beginner to competitively employable in a few months",
    },
    {
      id: 2,
      name: "Bright Abu",
      title: "UX / UI Designer",
      img: testiImg2,
      text: "Getting to know about Rework's software engineering bootcamp changed my life for the better. I enrolled for the program without any idea what coding was about, along with the feeling of inadequacy due largely to my lack of educational in computer science and core programming. But the guys at Rework are awesome, offering support and listening ears every step of the way.",
    },
    {
      id: 3,
      name: "Oji Innocent",
      title: "Full Stack Developer",
      img: testiImg3,
      text: "The expertise, technologies and flexibility with which Rework Technology use to groom juveniles and mostly computer newbies into industry standard software developers and experts is next to none. I am a product of their excellent job. Because of them I have grown to be more passionate about Web applications and the various technologies. Thank you, Rework!",
    },
  ];

  return (
    <div className="home_section3">
      <div className="hs3-imgs">
        <img src={img1} alt="" className="hs3-imgs1" />
        <img src={img2} alt="" className="hs3-imgs2" />
      </div>
      <div className="hs3--content container">
        <div className="hs3--header">
          <h2>Stories from real people</h2>
          <p>Whether it's your first code or design, we are are here to support you on every step of your journey.</p>
        </div>
        <div className="hs3--testimonials">
          {testimonials.map((test) => (
            <div className="hs3-testimonial" key={test.id}>
              <p>{test.text}</p>
              <div className="hs3-testi">
                <div className="hs3-testi-img">
                  <img src={test.img} alt="Testimonial" />
                </div>
                <h4>
                  -{test.name}, {test.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSection3;
