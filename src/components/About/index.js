import { useEffect, useState } from "react"
import {
  faNodeJs,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
import AnimatedLetters from "../AnimatedLetters"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./index.scss"
import PythonLogo from "../../assets/images/python-logo.svg"

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="left-half">
          <div className="before-text">
            <span>&lt;h1&gt;</span>
          </div>
          <div className="text-zone">
            <h1 className="page-title">
              <AnimatedLetters
                letterClass="text-animate"
                text="About me"
                delay={2}
              />
            </h1>
            <p>
              As a Full Stack Developer, I love creating and developing visually
              pleasing, functional web applications.
            </p>
            <p>
              I'm skilled in front-end technologies like HTML, CSS, JavaScript,
              and React, and back-end tools like NodeJS, Python, and MySQL.
            </p>
            <p>
              I'm dedicated to delivering high-standard projects on time and I'm
              always looking to enhance my skills (I'm currently excited about
              diving deeper into videogame development!).
            </p>
            <p>
              Outside of coding, I enjoy videogames, movies and TTRPG's. I
              believe my hobbies also enhance my work as a developer, inspiring
              creativity and innovation in my own projects!
            </p>
          </div>
          <div className="after-text">
            <span>&lt;/h1&gt;</span>
          </div>
        </div>
        <div className="right-half">
          <div className="cube-container">
            <div className="cubespinner rotating">
              <div className="cube-face face1">
                <FontAwesomeIcon icon={faNodeJs} color="#68a063" />
              </div>
              <div className="cube-face face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="cube-face face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="cube-face face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="cube-face face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="cube-face face6">
                <img src={PythonLogo} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
