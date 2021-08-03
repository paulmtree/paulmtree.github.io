import "./css/frontpage_style.css";
import "./css/roboto.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CodeButtons from "./components/codeButtons.js";
import { motion, AnimateSharedLayout } from "framer-motion";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import React, { Component } from "react";
import avatarImg from "./images/avatar.jpg";
import codeImg from "./images/coding1.jpg";
import softSkillsImg from "./images/speaking.jpg";
import hobbiesImg from "./images/surfing-color.jpg";
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
            <p className="about-me-bar"></p>
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
      {/* <AnimateSharedLayout>
              <motion.ul layout initial={{ borderRadius: 25 }}>
                {code_items.map((item) => (
                  <CodeButtons {...item} key={item.link} />
                ))}
              </motion.ul>
            </AnimateSharedLayout> */}
      <div className="center-div">
        <div className="expanded-interests">
          <a classname="code-wrapper" href="codeportfolio.html">
            <div className="box code-portfolio">
              <div className="code-image">
                <img src={codeImg} />
              </div>
              <div className="interests-name">Coding Portfolio</div>
              <div className="interests-desc">
                A collection of my coding projects, most of them personal
                projects. Machine Learning, Data Engineering, Frontend
                Development, and Data Dashboards.
              </div>
              <div className="right-arrow">
                <BsArrowRight />
              </div>
            </div>
          </a>
          <div className="small-right">
            <a className="box soft-skills" href="softskills.html">
              <div className="small-right-img">
                <img src={softSkillsImg} />
              </div>
              <div className="interests-text">
                <div className="small-interests-name">Soft Skills</div>
                <div className="interests-desc">Teaching</div>
                <div className="interests-desc"> Leadership</div>
                <div className="interests-desc"> Writing</div>
                <div className="right-arrow">
                  <BsArrowRight />
                </div>
              </div>
            </a>
            <div className="divider"></div>
            <a className="box hobbies" href="hobbies.html">
              <div className="small-right-img">
                <img src={hobbiesImg} />
              </div>

              <div className="interests-text">
                <div className="small-interests-name">Hobbies</div>
                <div className="interests-desc"> Surfing Videos</div>
                <div className="interests-desc"> Photography Album</div>
                <div className="interests-desc"> PC Building</div>
                <div className="right-arrow">
                  <BsArrowRight />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
