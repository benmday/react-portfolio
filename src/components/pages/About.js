import React from "react";
import profilePicture from "../../portfolio-pic.jpeg";

const BenDay = `{
  livesIn: "Port Orchard, WA",
  age: 27,
  favoriteColor: "purple",
  hobbies: ["enjoying foreign foods", "soccer", "record collecting", "rock climbing"],
  pets: [
    {
    type: "cat",
    name: "Ferguson"
    },
    {
    type: "cat",
    name: "Archie"
    },
    {
    type: "cat",
    name: "Posie"
    },
    {
    type: "cat",
    name: "Ollie"
    },
  ]
}`

export default function About() {
  return (
    <div className="about">
      <img id="profile-pic" src={profilePicture} alt="Ben Day headshot"></img>
      <p>
        const BenDay = {BenDay}
      </p>      
    </div>
  );
}

