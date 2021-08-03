import logo from "./logo.svg";
import "./css/frontpage_style.css";
import "./css/roboto.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faFileCode,
  faHiking,
  faCameraRetro,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

import { white } from "chalk";
function App() {
  return (
    <div className="App">
      {/* // Header */}
      <div id="banner" alt="@eberhardgross">
        <div id="header">
          {/* // Nav */}
          <nav id="nav">
            <ul className="navbutton">
              <li>
                <a href="index.html">Contact</a>
              </li>
              <li>
                <a href="coding-portfolio/index.html">Visual Media</a>
              </li>
              <li>
                <a href="hobbies.html">Hobbies</a>
              </li>
              <li>
                <a href="visual_media.html">Coding Portfolio</a>
              </li>
              <li className="active">
                <a href="visual_media.html">Homepage</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="title">
          <Fade left>
            <a id="name">Paul</a>
            <a
              id="name"
              style={{ bottom: "-31vh", marginLeft: "5vw", fontSize: "15vh" }}
            >
              McCabe
            </a>
          </Fade>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "90vh",
          backgroundColor: "black",
        }}
      ></div>
      {/* // Avatar */}
      {/* <div
        id="banner-content"
        style={{ position: "absolute", display: "inline-block" }}
      >
        <div className="container"></div>
      </div> */}
      {/* // Banner // About Me */}
      <div id="down_arrow"></div>
      <div id="about_me" className="w3-row">
        <Fade top>
          <div id="profile" className="w3-third">
            <span class="avatar">
              <img src={require("./images/avatar.jpg").default} alt="" />
            </span>
          </div>
        </Fade>
        <div id="profile_description" className="w3-twothird">
          <Fade top>
            <p id="profile_title">About Me</p>
            <p
              style={{
                height: ".7vh",
                width: "5vw",
                backgroundColor: "white",
              }}
            ></p>
            <p id="profile_text">
              I am an Electrical Engineering and Philosophy major at Case
              Western Reserve University from Hawaii with an interest in
              consulting, data science, digital technology in business, and
              philosophy. In my spare time I enjoy surfing, golf, weightlifting,
              photography, and more. I love finding new interests in the field
              of data science and how data science connects with other fields.
            </p>
          </Fade>

          <div id="resume_button"></div>
        </div>
      </div>
      <div id="down_arrow"></div>
      {/* // Hidden Sections 
		<div id="hidden-sections">
			<div href="coding-portfolio/index.html" id=section-1>
				
			</div>
			<div id=section-2>
				
			</div>
			<div id=section-3>
				
			</div>
			<div id=section-4>
				
			</div>
		</div> */}
      {/* Pictures of Sections */}
      <div className="expanded-interests">
        <div className="right-text w3-row">
          <div className="w3-half">
            <div className="interests-img">
              <a href="coding-portfolio/index.html">
                <Fade left>
                  <img src={require("./images/coding1.jpg").default}></img>
                </Fade>
              </a>
            </div>
          </div>
          <div className="w3-half">
            <div className="interests-text">
              <a href="coding-portfolio/index.html">
                <Fade right>
                  <p className="interests-name">Coding Portfolio</p>
                  <Fade>
                    <div className="text-underline"></div>
                  </Fade>
                  <p className="interests-desc">
                    Outlier analysis, image processing, data pipelines, and
                    more.
                  </p>
                </Fade>
              </a>
              {/* <!--
						<a className="more-button" href="coding-portfolio/index.html">Explore</a>
						--> */}
            </div>
          </div>
        </div>
        <div className="left-text w3-row">
          <div className="w3-half">
            <div className="interests-text">
              <a href="coding-portfolio/index.html">
                <Fade left>
                  <p className="interests-name">Hobbies</p>
                  <Fade>
                    <div className="text-underline"></div>
                  </Fade>
                  <p className="interests-desc">
                    Surfing, investing, computer building, and more.
                  </p>
                </Fade>
              </a>
              {/* <!--
						<a className="more-button" href="coding-portfolio/index.html">Explore</a>
						--> */}
            </div>
          </div>
          <div className="w3-half">
            <div className="interests-img">
              <a href="coding-portfolio/index.html">
                <Fade right>
                  <img
                    src={require("./images/surfing-color.jpg").default}
                  ></img>
                </Fade>
              </a>
            </div>
          </div>
        </div>
        <div className="right-text w3-row">
          <div className="w3-half">
            <div className="interests-img">
              <a href="coding-portfolio/index.html">
                <Fade left>
                  <img
                    src={require("./images/mountain-color1.jpg").default}
                  ></img>
                </Fade>
              </a>
            </div>
          </div>
          <div className="w3-half">
            <div className="interests-text">
              <a href="coding-portfolio/index.html">
                <Fade right>
                  <p className="interests-name">Visual Content</p>
                  <Fade>
                    <div className="text-underline"></div>
                  </Fade>
                  <p className="interests-desc">
                    Photos of Swiss mountains, surfing videos in Hawaii, and
                    more.
                  </p>
                </Fade>
              </a>
              {/* <!--
						<a className="more-button" href="coding-portfolio/index.html">Explore</a>
						--> */}
            </div>
          </div>
        </div>
      </div>
      {/* Main */}
      <div className="bottom-toolbar">
        <div class="w3-row icons-row">
          <Fade bottom>
            <a href="#">
              <div className="w3-third icon-col">
                <img src={require("./images/coding1.jpg").default}></img>
                <a className="icon-text">Coding Portfolio</a>
                <a>
                  <FontAwesomeIcon className="icon" icon={faFileCode} />
                </a>
              </div>
            </a>
            <a href="#">
              <div className="w3-third icon-col">
                <img src={require("./images/surfing-color.jpg").default}></img>
                <a className="icon-text">Hobbies</a>
                <a>
                  <FontAwesomeIcon className="icon" icon={faHiking} />
                </a>
              </div>
            </a>
            <a href="#">
              <div className="w3-third icon-col">
                <img
                  src={require("./images/mountain-color1.jpg").default}
                ></img>
                <a className="icon-text">Visual Media</a>
                <a>
                  <FontAwesomeIcon className="icon" icon={faCameraRetro} />
                </a>
              </div>
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default App;
