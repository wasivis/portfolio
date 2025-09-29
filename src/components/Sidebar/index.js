import { Link, NavLink, useLocation } from "react-router-dom"
import "./index.scss"
import LogoW from "../../assets/images/logo-w.png"
import LogoSubtitle from "../../assets/images/logo_sub_w.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faTimes,
  faMugHot
} from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"

const Sidebar = () => {
  const location = useLocation()
  const [showNav, setShowNav] = useState(false)

  const handleIconClick = () => {
    setShowNav((prevShowNav) => !prevShowNav)
  }

  return (
    <div className={`nav-bar ${showNav ? "mobile-show" : "mobile-closed"}`}>
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoW} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logosub" />
      </Link>
      <nav className={showNav ? "mobile-show" : "mobile-closed"}>
        <NavLink exact activeClassName="active" to="/">
          {location.pathname === "/" ? (
            <span className="nav-text">HOME</span>
          ) : (
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          )}
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="about-link"
          to="/about"
        >
          {location.pathname === "/about" ? (
            <span className="nav-text">ABOUT</span>
          ) : (
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          )}
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="portfolio-link"
          to="/projects"
        >
          {location.pathname === "/projects" ? (
            <span className="nav-text">PROJECTS</span>
          ) : (
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          )}
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="contact-link"
          to="/contact"
        >
          {location.pathname === "/contact" ? (
            <span className="nav-text">CONTACT</span>
          ) : (
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          )}
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ivanmontequin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/wasivis"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ko-fi.com/wasivis"
          >
            <FontAwesomeIcon icon={faMugHot} />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={showNav ? faTimes : faBars}
        color="#4d4d4e"
        size="3x"
        className={showNav ? "close-icon" : "hamburger-icon"}
        onClick={handleIconClick}
      />
    </div>
  )
}

export default Sidebar
