import { Routes, Route, useNavigate } from "react-router-dom"
import React, { useEffect } from "react"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import "./App.scss"

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const handleRouteChange = () => {
      const sidebar = document.getElementById("sidebar")
      sidebar &&
        typeof sidebar.setShowNav === "function" &&
        sidebar.setShowNav(false)
    }

    const unlisten = navigate(handleRouteChange)

    return () => {
      typeof unlisten === "function" && unlisten()
    }
  }, [navigate])

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
