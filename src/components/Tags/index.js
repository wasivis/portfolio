import React, { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import "./index.scss"

const Tags = () => {
  const topTagsRef = useRef(null)
  const bottomTagsRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const top = topTagsRef.current
    const bottom = bottomTagsRef.current

    top?.classList.add("animate-tags")
    bottom?.classList.add("animate-tags")

    return () => {
      top?.classList.remove("animate-tags")
      bottom?.classList.remove("animate-tags")
    }
  }, [location])

  return (
    <>
      <div className="top-tags" ref={topTagsRef}>
        <span className="tags top-html">{"<html>"}</span>
        <br />
        <span className="tags top-body">{"<body>"}</span>
      </div>
      <div className="bottom-tags" ref={bottomTagsRef}>
        <span className="tags bottom-body">{"</body>"}</span>
        <br />
        <span className="tags bottom-html">{"</html>"}</span>
      </div>
    </>
  )
}

export default Tags
