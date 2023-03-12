import React from "react";
import resumeJpg from "../../images/ben-day-resume.jpg";
import resumePdf from "../../images/ben-day-resume.pdf";

export default function Resume() {
  return (
    <div className="resume">
      <h4>Resume</h4>
      <img alt="Ben Day resume" src={resumeJpg} className="img-fluid"></img>
      <a id="resume-pdf" href={resumePdf}>
        <button type="button" className="btn btn-dark ms-3" id="download">
          Download
        </button>
      </a>
    </div>
  );
}
