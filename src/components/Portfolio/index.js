import React, { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import portfolioData from "../../data/portfolio.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons"

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1) % portfolioData.portfolio.length
    )
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + portfolioData.portfolio.length) %
        portfolioData.portfolio.length
    )
  }
  return (
    <>
      <div className="container portfolio-page">
        <div className="left-half">
          <div className="before-text">
            <span className="animated-text">&lt;h1&gt;</span>
          </div>
          <div className="text-zone">
            <h1 className="page-title">
              <AnimatedLetters
                letterClass="text-animate"
                text="Portfolio"
                delay={3}
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
                src={
                  process.env.PUBLIC_URL +
                  (portfolioData.portfolio[currentSlide]
                    ? portfolioData.portfolio[currentSlide].cover
                    : "")
                }
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <span className="title">
                  {portfolioData.portfolio[currentSlide]
                    ? portfolioData.portfolio[currentSlide].title
                    : ""}
                </span>
                <h4 className="description">
                  {portfolioData.portfolio[currentSlide]
                    ? portfolioData.portfolio[currentSlide].description
                    : ""}
                </h4>
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

export default Portfolio
