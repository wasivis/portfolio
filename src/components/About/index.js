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
                delay={3}
              />
            </h1>
            <p>
              As a Full Stack Developer, I am passionate about creating and
              developing web applications that are both functional and visually
              appealing.
            </p>
            <p>
              My background in front-end development includes expertise in HTML,
              CSS, JavaScript, and libraries like React (this website was made
              using it!). On the back-end, I am proficient in NodeJS, Python,
              and databases like MySQL.
            </p>
            <p>
              In addition to my technical skills, I'm always willing to go the
              extra mile to ensure projects are completed on time and to the
              highest standard. I'm always looking to expand my knowledge and
              skills in the field (I'm currently excited about diving deeper
              into videogame development!).
            </p>
            <p>
              Outside of coding, I enjoy videogames, movies and TTRPG's. I
              believe my hobbies also enhance my work as a developer because
              they expose me to a wide range of user interfaces and mechanics,
              which can inspire creativity and innovation in my own projects!
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
