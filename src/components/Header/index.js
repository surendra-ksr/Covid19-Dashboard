import './index.css'

export default function Header() {
  return (
    <div className="headerBg">
      <h1 className="logoName">
        COVID19<span className="logoSpan">INDIA</span>
      </h1>
      <ul>
        <li>
          <button className="homeButton">Home</button>
        </li>
        <li>
          <button className="aboutButton">About</button>
        </li>
      </ul>
    </div>
  )
}
