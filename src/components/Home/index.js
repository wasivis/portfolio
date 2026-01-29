import { Link } from "react-router-dom"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import Logo from "./Logo"

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="left-half">
          <div className="text-zone">
            <h1 className="home-title">
              <AnimatedLetters
                letterClass="text-animate"
                text="hi,"
                delay={2.5}
              />
            </h1>
            <h1 className="home-title">
              <AnimatedLetters
                letterClass="text-animate"
                text="i'm wasivis,"
                delay={2.5 + "hi,".length / 10}
              />
            </h1>
            <h1 className="home-title">
              <AnimatedLetters
                letterClass="text-animate"
                text="full stack"
                delay={2.5 + "hi,".length / 10 + "i'm wasivis,".length / 10}
              />
            </h1>
            <h1 className="home-title">
              <AnimatedLetters
                letterClass="text-animate"
                text="developer."
                delay={
                  2.5 +
                  "hi,".length / 10 +
                  "i'm wasivis,".length / 10 +
                  "full stack".length / 10
                }
              />
            </h1>
            <h2>React / Trypescript Specialist</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
        <div className="right-half">
          <Logo />
        </div>
      </div>
    </>
  )
}

export default Home
