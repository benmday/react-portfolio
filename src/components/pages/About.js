import React from "react";
import profilePicture from "../../images/profile-pic.jpeg";
import jsIcon from "../../images/js-icon.png";
import mongodbIcon from "../../images/mongodb-icon.png";
import mysqlIcon from "../../images/mysql-icon.png";
import nodeIcon from "../../images/node-icon.png";
import reactIcon from "../../images/react-icon.png";
import expressIcon from "../../images/express-icon.png";

const currentAge = new Date().getFullYear() - 1996;

export default function About() {
  return (
    <div className="about">
      <div id="ben-day">
        <h2>Ben Day</h2>
        <h6>full-stack web developer</h6>
      </div>
      <div className="about-main">
        <img id="profile-pic" src={profilePicture} alt="Ben Day"></img>
        <p id="example-code">
          <span style={{ color: `rgb(43, 43, 255)` }}>const </span>
          <span style={{ color: `rgb(196, 42, 42)` }}>BenDay</span> ={" "}
          <span style={{ color: `rgb(221, 169, 0)` }}>{"{"}</span>
          <br />
          <span style={{ marginLeft: `30px` }}>
            <span style={{ color: `rgb(196, 42, 42)` }}>livesIn</span>: "Port
            Orchard, WA",
          </span>
          <br />
          <span style={{ marginLeft: `30px` }}>
            <span style={{ color: `rgb(196, 42, 42)` }}>age</span>:{" "}
            <span style={{ color: `rgb(2, 155, 2)` }}>{currentAge}</span>,
          </span>
          <br />
          <span style={{ marginLeft: `30px` }}>
            <span style={{ color: `rgb(196, 42, 42)` }}>favoriteColor</span>:
            "purple",
          </span>
          <br />
          <span style={{ marginLeft: `30px` }}>
            <span style={{ color: `rgb(196, 42, 42)` }}>hobbies</span>:{" "}
            <span style={{ color: `rgb(215, 0, 223)` }}>[</span>
          </span>
          <br />
          <span style={{ marginLeft: `45px` }}>"enjoying foreign foods",</span>
          <br />
          <span style={{ marginLeft: `45px` }}>"soccer",</span>
          <br />
          <span style={{ marginLeft: `45px` }}>"record collecting",</span>
          <br />
          <span style={{ marginLeft: `45px` }}>"rock climbing",</span>
          <br />
          <span style={{ marginLeft: `30px` }}>
            <span style={{ color: `rgb(215, 0, 223)` }}>]</span>,
          </span>
          <br />
          <span style={{ marginLeft: `30px` }}>
            <span style={{ color: `rgb(196, 42, 42)` }}>pets</span>:{" "}
            <span style={{ color: `rgb(215, 0, 223)` }}>[</span>
          </span>
          <br />
          <span style={{ marginLeft: `60px` }}>
            <span style={{ color: `rgb(43, 43, 255)` }}>{"{"}</span>
          </span>
          <br />
          <span style={{ marginLeft: `60px` }}>
            <span style={{ color: `rgb(196, 42, 42)` }}>type</span>: "cat",
          </span>
          <br />
          <span style={{ marginLeft: `60px` }}>
            <span style={{ color: `rgb(196, 42, 42)` }}>name</span>: "Ferguson",
          </span>
          <br />
          <span style={{ marginLeft: `60px` }}>
            <span style={{ color: `rgb(43, 43, 255)` }}>{"}"}</span>,
          </span>
          <br />
          <span style={{ marginLeft: `60px` }}>
            <span style={{ color: `rgb(43, 43, 255)` }}>{"{"}</span>
          </span>
          <br />
          <span style={{ marginLeft: `60px` }}>
            <span style={{ color: `rgb(196, 42, 42)` }}>type</span>: "cat",
          </span>
          <br />
          <span style={{ marginLeft: `60px` }}>
            <span style={{ color: `rgb(196, 42, 42)` }}>name</span>: "Archie",
          </span>
          <br />
          <span style={{ marginLeft: `60px` }}>
            <span style={{ color: `rgb(43, 43, 255)` }}>{"}"}</span>,
          </span>
          <br />
          <span style={{ marginLeft: `60px` }}>
            <span style={{ color: `rgb(43, 43, 255)` }}>{"{"}</span>
          </span>
          <br />
          <span style={{ marginLeft: `60px` }}>
            <span style={{ color: `rgb(196, 42, 42)` }}>type</span>: "cat",
          </span>
          <br />
          <span style={{ marginLeft: `60px` }}>
            <span style={{ color: `rgb(196, 42, 42)` }}>name</span>: "Posie",
          </span>
          <br />
          <span style={{ marginLeft: `60px` }}></span>
          <span style={{ color: `rgb(43, 43, 255)` }}>{"}"}</span>,<br />
          <span style={{ marginLeft: `60px` }}></span>
          <span style={{ color: `rgb(43, 43, 255)` }}>{"{"}</span>
          <br />
          <span style={{ marginLeft: `60px` }}></span>
          <span style={{ color: `rgb(196, 42, 42)` }}>type</span>: "cat",
          <br />
          <span style={{ marginLeft: `60px` }}></span>
          <span style={{ color: `rgb(196, 42, 42)` }}>name</span>: "Ollie",
          <br />
          <span style={{ marginLeft: `60px` }}></span>
          <span style={{ color: `rgb(43, 43, 255)` }}>{"}"}</span>,<br />
          <span style={{ marginLeft: `30px` }}></span>
          <span style={{ color: `rgb(215, 0, 223)` }}>]</span>,
          <br />
          <span style={{ color: `rgb(221, 169, 0)` }}>{"}"}</span>;
        </p>
      </div>
      <div className="about-text">
        <p>
          `Ben lives in{" "}
          <span style={{ color: `rgb(43, 43, 255)` }}>${"{"}</span>
          <span style={{ color: `rgb(196, 42, 42)` }}>BenDay.livesIn</span>
          <span style={{ color: `rgb(43, 43, 255)` }}>{"}"}</span> with his wife
          Colleen and their four cats,{" "}
          <span style={{ color: `rgb(43, 43, 255)` }}>${"{"}</span>
          <span style={{ color: `rgb(196, 42, 42)` }}>BenDay.pets[</span>
          <span style={{ color: `rgb(2, 155, 2)` }}>0</span>
          <span style={{ color: `rgb(196, 42, 42)` }}>].name</span>
          <span style={{ color: `rgb(43, 43, 255)` }}>{"}"}</span>,{" "}
          <span style={{ color: `rgb(43, 43, 255)` }}>${"{"}</span>
          <span style={{ color: `rgb(196, 42, 42)` }}>BenDay.pets[</span>
          <span style={{ color: `rgb(2, 155, 2)` }}>1</span>
          <span style={{ color: `rgb(196, 42, 42)` }}>].name</span>
          <span style={{ color: `rgb(43, 43, 255)` }}>{"}"}</span>,{" "}
          <span style={{ color: `rgb(43, 43, 255)` }}>$</span>
          {"{"}
          <span style={{ color: `rgb(196, 42, 42)` }}>BenDay.pets[</span>
          <span style={{ color: `rgb(2, 155, 2)` }}>2</span>
          <span style={{ color: `rgb(196, 42, 42)` }}>].name</span>
          <span style={{ color: `rgb(43, 43, 255)` }}>{"}"}</span>, and{" "}
          <span style={{ color: `rgb(43, 43, 255)` }}>${"{"}</span>
          <span style={{ color: `rgb(196, 42, 42)` }}>BenDay.pets[</span>
          <span style={{ color: `rgb(2, 155, 2)` }}>3</span>
          <span style={{ color: `rgb(196, 42, 42)` }}>].name</span>
          <span style={{ color: `rgb(43, 43, 255)` }}>{"}"}</span>. His hobbies
          include <span style={{ color: `rgb(43, 43, 255)` }}>${"{"}</span>
          <span style={{ color: `rgb(196, 42, 42)` }}>BenDay.hobbies</span>
          <span style={{ color: `rgb(43, 43, 255)` }}>{"}"}</span>. He is new to
          the development world, but is looking forward to diving in and
          learning even more about this exciting industry! Full-stack web
          development is his forte, and he excels in the backend environment.
        </p>
        <p>
          Born and raised in Idaho Falls, Ben has lived in Ecuador, Arizona,
          Utah, and most recently, Washington. He loves the East Coast, and its
          his dream to move to Massachusetts with his family, preferably near
          Cape Cod. The history, food, beaches, and stunning architecture really
          draw him there.`
        </p>
      </div>
      <div className="container" id="skills">
        <h2>Skills:</h2>
        <div className="row">
          <div className="col-lg-2 col-4">
            <img id="js-icon" src={jsIcon} alt="JavaScript icon"></img>
          </div>
          <div className="col-lg-2 col-4">
            <img
              id="express-icon"
              src={expressIcon}
              alt="Express.js icon"
            ></img>
          </div>
          <div className="col-lg-2 col-4">
            <img id="node-icon" src={nodeIcon} alt="Node.js icon"></img>
          </div>
          <div className="col-lg-2 col-4">
            <img id="mysql-icon" src={mysqlIcon} alt="MySQL icon"></img>
          </div>
          <div className="col-lg-2 col-4">
            <img id="react-icon" src={reactIcon} alt="React icon"></img>
          </div>
          <div className="col-lg-2 col-4">
            <img id="mongodb-icon" src={mongodbIcon} alt="MongoDB icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
