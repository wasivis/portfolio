import { Routes, Route, useLocation } from "react-router-dom"
import React, { useEffect } from "react"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import "./App.scss"

function App() {
  const location = useLocation()

  useEffect(() => {
    // On location change attempt to close mobile sidebar if it exposes setShowNav
    const sidebar = document.getElementById("sidebar")
    if (sidebar && typeof sidebar.setShowNav === "function") {
      sidebar.setShowNav(false)
    }
    // run every time location changes
  }, [location.pathname])

  return (
    <Routes basename="/portfolio">
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
