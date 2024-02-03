import { useEffect, useRef } from "react"

function useAnimation(ref) {
  useEffect(() => {
    const node = ref.current

    const handleAnimationEnd = () => {
      node.style.animation = ""
      node.removeEventListener("animationend", handleAnimationEnd)
    }

    if (node) {
      node.addEventListener("animationend", handleAnimationEnd)
      node.style.animation = "none"

      requestAnimationFrame(() => {
        node.style.animation = ""
      })
    }

    return () => {
      if (node) {
        node.removeEventListener("animationend", handleAnimationEnd)
      }
    }
  }, [ref])
}

export default useAnimation
