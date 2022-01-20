import "./styles.css";
import "bootstrap/js/src/collapse.js"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light nav-custom">
        <div className="container-fluid custom-container">
          <a className="navbar-brand nav-custom-logo" href="/">Carros Top</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end nav-itens-custom" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/catalog">Catálogo</a>
                    </li>
                </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
