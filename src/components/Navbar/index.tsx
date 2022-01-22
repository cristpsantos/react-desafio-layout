import "./styles.css";
import "bootstrap/js/src/collapse.js"

import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light nav-custom">
        <div className="container-fluid custom-container">
          <Link to="/" className="navbar-brand nav-custom-logo">Carros Top</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end nav-itens-custom" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/catalog" className="nav-link" activeClassName="active">Catálogo</NavLink>
                    </li>
                </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
