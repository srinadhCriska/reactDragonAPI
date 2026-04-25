import "./Navbar.styles.css"
import { useNavigate } from "react-router-dom"
const Navbar=()=>{
  const navigate=useNavigate()

  const onClickNavLogo=()=>{
      navigate("/"
      )
  }

    return (
        <nav>
        <img
          className="nav-logo"
          src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp"
          alt="nav-logo"
          onClick={onClickNavLogo}
        />
        <div className="nav-items">
          <a
            href="https://web.dragonball-api.com/documentation"
            target="_blank"
          >
            Docs
          </a>
          <a href="https://web.dragonball-api.com/about" target="_blank">
            About
          </a>
          <a
            className="a-button"
            href="https://web.dragonball-api.com/support"
            target="_blank"
          >
            Support Us
          </a>
        </div>
      </nav>
    )
}

export default Navbar