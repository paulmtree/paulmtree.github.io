import "./css/frontpage_style.css";
import "./css/roboto.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CodeButtons from "./components/codeButtons.js";
import { motion, AnimateSharedLayout } from "framer-motion";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { BsArrowDown } from "react-icons/bs";
import React, { Component } from "react";
import avatarImg from "./images/avatar.jpg";
const items = [0, 1, 2];

function App() {
  const code_items = [
    {
      title: "Project 1",
      description: "Description 1",
      link: "link1.html",
    },
    {
      title: "Project 2",
      description: "Description 2",
      link: "link2.html",
    },
    {
      title: "Project 3",
      description: "Description 3",
      link: "link3.html",
    },
  ];
  return (
    <div className="App">
      {/* // Header */}
      <div id="banner" alt="@eberhardgross">
        <div id="header">
          {/* // Nav */}
          <nav id="nav">
            <ul className="navbutton">
              <li className="active">
                <a href="visual_media.html">Homepage</a>
              </li>
              <li>
                <a href="visual_media.html">Coding Portfolio</a>
              </li>
              <li>
                <a href="coding-portfolio/index.html">Soft Skills</a>
              </li>
              <li>
                <a href="hobbies.html">Hobbies</a>
              </li>
              <li>
                <a href="resume.html">Résumé</a>
              </li>
              <li>
                <a href="index.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <BsArrowDown className="down-arrow"></BsArrowDown>
        <div id="title">
          <Fade left>
            <a id="name-top">Paul</a>
            <a id="name-bottom">McCabe</a>
          </Fade>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "55em",
          backgroundColor: "black",
        }}
      ></div>
      {/* // Banner // About Me */}
      <div id="down_arrow"></div>
      <div id="about_me" className="w3-row">
        <Fade top>
          <div id="profile" className="w3-third">
            <img src={avatarImg} alt="avatar" />
          </div>
        </Fade>
        <div id="profile_description" className="w3-twothird">
          <Fade top>
            <p id="profile_title">About Me</p>
            <p
              style={{
                height: ".4em",
                width: "6em",
                backgroundColor: "rgba(255,255,255,.9)",
              }}
            ></p>
            <p id="profile_text">
              I am an Electrical Engineering and Philosophy major at Case
              Western Reserve University in Cleveland. I am originally from
              Hawaii and have an interest in consulting, data
              science/engineering, and philosophy. In my spare time I enjoy
              surfing, exercising, photography, and more. I love finding new
              interests in the field of data science and how data creates
              actionable insights.
            </p>
          </Fade>
        </div>
      </div>
      <Fade bottom>
        <a id="resume-button" href="resume.html">
          <a id="resume-bar">Résumé</a>
        </a>
      </Fade>
      {/* Pictures of Sections */}
      <div className="center-div">
        <div className="expanded-interests">
          <div class="box code-portfolio">
            <div className="interests-name">Coding Portfolio</div>
            <AnimateSharedLayout>
              <motion.ul layout initial={{ borderRadius: 25 }}>
                {code_items.map((item) => (
                  <CodeButtons {...item} key={item.link} />
                ))}
              </motion.ul>
            </AnimateSharedLayout>
          </div>
          <div class="box soft-skills">
            <div className="interests-name">Soft Skills</div>
          </div>
          <div class="box hobbies">
            <div className="interests-name">Hobbies</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
