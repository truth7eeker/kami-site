import React from "react";
import "./About.css";
import aboutPic from "../../assets/about.jpg";
import { ourPics } from "../../data";

function About() {
  return (
    <div className="about">
      <h1>О центре</h1>
      <div className="about__content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat
          vitae turpis id efficitur. Etiam quam odio, venenatis et metus sed,
          gravida porttitor nisi. Donec rhoncus convallis congue. Aliquam massa
          quam, ultrices non suscipit et, finibus a mi. Nulla fermentum
          tincidunt fermentum. Integer vel diam in massa fringilla varius. Duis
          tempus fringilla posuere. Donec nunc metus, accumsan sed volutpat at,
          accumsan vel ligula. Phasellus hendrerit ornare eros sit amet auctor.
          Proin placerat diam massa, id vulputate risus tristique at. Donec
          facilisis turpis metus, sit amet vulputate turpis rhoncus in. Mauris
          vitae gravida tellus. Nullam vel mauris quis lectus finibus porta quis
          ac est.
        </p>
        <div>
          <img src={aboutPic} alt="about-us-picture" className="about__pic" />
        </div>
      </div>
      <div className="about__atmo">
        <h2>Почувствуйте нашу атмосферу</h2>
        <div className="about__atmo-pics">
          {ourPics.map((pic) => (
            <img src={pic} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
