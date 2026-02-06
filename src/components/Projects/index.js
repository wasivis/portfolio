import React, { useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import portfolioData from "../../data/portfolio.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons"

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animClass, setAnimClass] = useState("")
  const ANIM_DURATION = 400 // ms, keep in sync with CSS

  const nextSlide = () => {
    if (animClass) return // ignore clicks while animating
    setAnimClass("slide-out-left")
    setTimeout(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide + 1) % portfolioData.portfolio.length
      )
      setAnimClass("slide-in-right")
      setTimeout(() => setAnimClass(""), ANIM_DURATION)
    }, ANIM_DURATION)
  }

  const prevSlide = () => {
    if (animClass) return
    setAnimClass("slide-out-right")
    setTimeout(() => {
      setCurrentSlide(
        (prevSlide) =>
          (prevSlide - 1 + portfolioData.portfolio.length) %
          portfolioData.portfolio.length
      )
      setAnimClass("slide-in-left")
      setTimeout(() => setAnimClass(""), ANIM_DURATION)
    }, ANIM_DURATION)
  }
  return (
    <>
      <div className="container projects-page">
        <div className="left-half">
          <div className="text-zone">
            <h1 className="page-title">
              <AnimatedLetters
                letterClass="text-animate"
                text="Projects"
                delay={2}
              />
            </h1>
            <p>
              This is the space where I get to share the projects I've worked on
              and am proud of. I know it's small now, but it'll grow in time!
              Feel free to explore and I hope you appreciate the work as much as
              I enjoyed creating them!
            </p>
          </div>
        </div>
        <div className="right-half">
          <div className="slideshow-container">
            <div className={`image-box ${animClass}`}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  (portfolioData.portfolio[currentSlide]
                    ? portfolioData.portfolio[currentSlide].cover
                    : "")
                }
                className="project-image"
                alt="project"
              />
              <div className="content">
                <section className="title">
                  {portfolioData.portfolio[currentSlide]
                    ? portfolioData.portfolio[currentSlide].title
                    : ""}
                </section>
                <section className="description">
                  {portfolioData.portfolio[currentSlide]
                    ? portfolioData.portfolio[currentSlide].description
                    : ""}
                </section>
                <section className="stack">
                  {portfolioData.portfolio[currentSlide]
                    ? portfolioData.portfolio[currentSlide].stack
                    : ""}
                </section>
                <button
                  className="btn"
                  onClick={() =>
                    window.open(portfolioData.portfolio[currentSlide].url)
                  }
                >
                  View
                </button>
              </div>
            </div>
            <div className="buttons">
              <FontAwesomeIcon
                className="arrow-btn left"
                onClick={prevSlide}
                icon={faCircleLeft}
                color="#4d4d4e"
              />
              <FontAwesomeIcon
                className="arrow-btn right"
                onClick={nextSlide}
                icon={faCircleRight}
                color="#4d4d4e"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
