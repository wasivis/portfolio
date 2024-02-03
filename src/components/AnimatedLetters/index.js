import "./index.scss"

const AnimatedLetters = ({ letterClass, text, delay = 0 }) => {
  const strArray = text.split("")

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i}`}
          style={{ animationDelay: `${delay + i / 10}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
