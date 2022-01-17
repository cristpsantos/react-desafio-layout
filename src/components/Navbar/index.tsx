import "./styles.css";
import "bootstrap/js/src/collapse.js"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-primary">
      <div className="container main-nav">
        <a className="nav-logo-text" href="link">
          Carros Top
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#bdsDesafioLayout"
          aria-controls="bdsDesafioLayout"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="bdsDesafioLayout">
          <div className="navbar-nav offset-md-7 nav-menu">
              <li>
                  <a href="link">
                    Home
                  </a>
              </li>
              <li>
                  <a href="link">
                    Catálogo   
                  </a>
              </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
