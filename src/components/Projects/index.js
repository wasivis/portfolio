import React, { useEffect, useState, useRef } from "react"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import projectsData from "../../data/projects.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons"

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animation, setAnimation] = useState("animate__fadeInRight")
  const imgRef = useRef(null)

  const slideLeft = () => {
    setAnimation("animate__fadeOutLeft")
    setTimeout(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide + 1) % projectsData.projects.length
      )
      setAnimation("animate__fadeInRight")
    }, 500)
  }

  const slideRight = () => {
    setAnimation("animate__fadeOutRight")
    setTimeout(() => {
      setCurrentSlide(
        (prevSlide) =>
          (prevSlide - 1 + projectsData.projects.length) %
          projectsData.projects.length
      )
      setAnimation("animate__fadeInLeft")
    }, 500)
  }

  return (
    <>
      <div className="container projects-page">
        <div className="left-half">
          <div className="before-text">
            <span className="animated-text">&lt;h1&gt;</span>
          </div>
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
          <div className="after-text">
            <span className="animated-text">&lt;/h1&gt;</span>
          </div>
        </div>
        <div className="right-half">
          <div className="slideshow-container">
            <div className="image-box">
              <img
                ref={imgRef}
                src={
                  process.env.PUBLIC_URL +
                  (projectsData.projects[currentSlide]
                    ? projectsData.projects[currentSlide].cover
                    : "")
                }
                className={`project-image animate__animated ${animation}`}
                alt="project"
              />
              <div className="content">
                <span className="title">
                  {projectsData.projects[currentSlide]
                    ? projectsData.projects[currentSlide].title
                    : ""}
                </span>
                <h4 className="description">
                  {projectsData.projects[currentSlide]
                    ? projectsData.projects[currentSlide].description
                    : ""}
                </h4>
                <button
                  className="btn"
                  onClick={() =>
                    window.open(projectsData.projects[currentSlide].url)
                  }
                >
                  View
                </button>
              </div>
            </div>
            <div className="buttons">
              <FontAwesomeIcon
                className="arrow-btn left"
                onClick={slideLeft}
                icon={faCircleLeft}
                color="#4d4d4e"
              />
              <FontAwesomeIcon
                className="arrow-btn right"
                onClick={slideRight}
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
