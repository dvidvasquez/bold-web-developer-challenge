import "./header.css";
import logo from "./logo.png"
export const Header = () => {
  return (
    <>
      <div className="header p-5 animate__animated animate__fadeIn">
        <div className="columns">
          <div className="column is-four-fifths">
            <div className="header-logo">
              <a  href="#">
                <img className="logo" src={logo} />
              </a>
            </div>
          </div>
          <div className="column">
              <a>
                    Mi negocio
              </a>
          </div>
          <div className="column">
              <a>
                Ayuda
                <span className="icon">
                  <i className="fas fa-question-circle"></i>
                </span>
              </a>
          </div>
        </div>
      </div>
    </>
  )
}
