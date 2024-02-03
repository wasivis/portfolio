import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "../Sidebar"
import Tags from "../Tags"
import "./index.scss"

const Layout = () => {
  const location = useLocation()

  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Tags key={location.pathname} />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
