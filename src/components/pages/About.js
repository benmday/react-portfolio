import React from "react";
import profilePicture from "../../profile-pic.jpeg";
import portfolioCode from "../../portfolio-code.png";

export default function About() {
  return (
    <div className="about">
      <img id="profile-pic" src={profilePicture} alt="Ben Day headshot"></img>
      <img id="portfolio-code" src={portfolioCode} alt="About Ben Day code snippet"></img>
    </div>
  );
}
