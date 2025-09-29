import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))

// Compute a sensible basename for BrowserRouter:
// - If REACT_APP_BASENAME is explicitly set, use it.
// - Otherwise, if PUBLIC_URL is set to a full URL (e.g. GitHub Pages), use its pathname.
// - Default to undefined (BrowserRouter will handle local dev).
const computeBasename = () => {
  if (process.env.REACT_APP_BASENAME) return process.env.REACT_APP_BASENAME
  const pub = process.env.PUBLIC_URL
  if (!pub) return undefined
  try {
    const url = new URL(pub)
    return url.pathname.replace(/\/$/, '') || undefined
  } catch {
    // If PUBLIC_URL is not a full URL, it may already be a path like '/portfolio'
    return pub.replace(/\/$/, '') || undefined
  }
}

const basename = computeBasename()

root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
)

reportWebVitals()
