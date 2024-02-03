import React, { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import "./index.scss"

const Tags = () => {
  const topTagsRef = useRef(null)
  const bottomTagsRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const animateTags = () => {
      topTagsRef.current?.classList.add("animate-tags")
      bottomTagsRef.current?.classList.add("animate-tags")
    }

    animateTags()

    return () => {
      topTagsRef.current?.classList.remove("animate-tags")
      bottomTagsRef.current?.classList.remove("animate-tags")
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
