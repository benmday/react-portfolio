import React from 'react';
import jate from "../../images/jate.gif"
import techBlog from "../../images/tech-blog.gif"
import smBackend from "../../images/sm-backend.gif"
import directoryCLI from "../../images/directory-cli.gif"
import passwordGenerator from "../../images/password-generator.gif"
import noteTaker from "../../images/note-taker.gif"

export default function Portfolio() {
  return (
    <div className="portfolio">
      <section className="text-center">
        <h4 className="mb-5" id="my-projects"><strong>My Projects</strong></h4>

        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img alt="Text editor - Progressive Web Application" src={jate} className="img-fluid" />
                <a href="https://jate-pwa-bd.herokuapp.com/" target="_blank" rel="noreferrer">
                  <div className="mask" style={{ backgroundColor: `rgba(251, 251, 251, 0.15)` }}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Text Editor - PWA</h5>
                <p className="card-text">
                  This text editor uses IndexDB for database storage, and it includes service workers that enable it to work entirely offline. The backend uses Webpack, necessary loaders, and Express.js to build and serve the app. 
                </p>
                <a href="https://github.com/benmday/text-editor-pwa" target="_blank" rel="noreferrer" className="btn btn-light"><i className="fab fa-github fa-3x"></i
        ></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img alt="Tech blog" src={techBlog} className="img-fluid" />
                <a href="https://tech-blog-week-14-challenge.herokuapp.com/" target="_blank" rel="noreferrer">
                  <div className="mask" style={{ backgroundColor: `rgba(251, 251, 251, 0.15)` }}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Tech Blog</h5>
                <p className="card-text">
                  This online blog is constructed using the MVC pattern. The backend is served using Express.js, and the frontend uses Sequelize and Express.js Handlebars to display the content from the MySQL database. 
                </p>
                <a href="https://github.com/benmday/mvc-tech-blog" target="_blank" rel="noreferrer" className="btn btn-light"><i className="fab fa-github fa-3x"></i
        ></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img alt="Social media backend application" src={smBackend} className="img-fluid" />
                <a href="https://drive.google.com/file/d/11LzyJ4Vj62OIkytdJ6r3qGg2kW8CVah4/view" target="_blank" rel="noreferrer">
                  <div className="mask" style={{ backgroundColor: `rgba(251, 251, 251, 0.15)` }}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Social Media - Backend</h5>
                <p className="card-text">
                  This app contains only a backend to demonstrate data routes and database interaction. It is built using MongoDB and Mongoose. The routes allow the creating, editing, and deleting of users, posts, and reactions. 
                </p>
                <a href="https://github.com/benmday/social-media-backend" target="_blank" rel="noreferrer" className="btn btn-light"><i className="fab fa-github fa-3x"></i
        ></a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img alt="Company directly - command-line interface" src={directoryCLI} className="img-fluid" />
                <a href="https://drive.google.com/file/d/1SSq0cBIs4Khf1pBIagYODjWZjBWzm049/view" target="_blank" rel="noreferrer">
                  <div className="mask" style={{ backgroundColor: `rgba(251, 251, 251, 0.15)` }}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Company Directory</h5>
                <p className="card-text">
                  This CLI node app allows the user to create, edit, and delete information about employees, including name, role, department, salary, and manager. MySQL and the NPM Inquirer are used in the backend of this app.
                </p>
                <a href="https://github.com/benmday/cli-company-directory" target="_blank" rel="noreferrer" className="btn btn-light"><i className="fab fa-github fa-3x"></i
        ></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img alt="Password generator" src={passwordGenerator} className="img-fluid" />
                <a href="https://benmday.github.io/password-generator/" target="_blank" rel="noreferrer">
                  <div className="mask" style={{ backgroundColor: `rgba(251, 251, 251, 0.15)` }}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Password Generator</h5>
                <p className="card-text">
                  This simple password generator is created using vanilla JavaScript. You can customize your generated password by choosing the length and whether to include lowercase letters, uppercase letters, numbers, or symbols. 
                </p>
                <a href="https://github.com/benmday/password-generator" target="_blank" rel="noreferrer" className="btn btn-light"><i className="fab fa-github fa-3x"></i
        ></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img alt="Note taking application" src={noteTaker} className="img-fluid" />
                <a href="https://challenge-week-11-note-taker.herokuapp.com/notes" target="_blank" rel="noreferrer">
                  <div className="mask" style={{ backgroundColor: `rgba(251, 251, 251, 0.15)` }}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Note Taker</h5>
                <p className="card-text">
                  This note taking application is served with Express.js. JavaScript is used to read, write, edit, and delete from the database, which is a .json document. This document is updated to reflect any changes made on the app. 
                </p>
                <a href="https://github.com/benmday/note-taker" target="_blank" rel="noreferrer" className="btn btn-light"><i className="fab fa-github fa-3x"></i
        ></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
