import {
  faNodeJs,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faPython
} from "@fortawesome/free-brands-svg-icons"
import AnimatedLetters from "../AnimatedLetters"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./index.scss"

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="left-half">
          <div className="text-zone">
            <h1 className="page-title">
              <AnimatedLetters
                letterClass="text-animate"
                text="About me"
                delay={2}
              />
            </h1>
            <p>
              I'm a Full Stack Developer passionate about building web applications that are both functional and visually engaging. My front-end experience includes JavaScript, TypeScript, Tailwind CSS, and React (which powers this site!). On the back-end, I build with Node.js, Python, and MongoDB, often using Next.js to bridge the two.
            </p>
            <p>
              I'm committed to delivering high-quality projects and constantly expanding my skills (I'm currently diving into AI integration).
            </p>
            <p>
              Outside of coding, I enjoy videogames, movies, and TTRPGs, which fuel my creativity and expose me to diverse interfaces and mechanics.
            </p>
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
                <FontAwesomeIcon icon={faPython} color="#FFD43B" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
