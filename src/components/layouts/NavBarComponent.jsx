import "./NavbarComponent.css";
import { Link } from "react-router-dom";
function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand mi-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          AccesibleMENTE
        </Link>

        <ul className="navbar-nav ms-auto flex-row">
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/sobre-nosotros">
              Sobre Nosotros
            </Link>
          </li>

          <li className="nav-item dropdown mx-3">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Profesionales
            </a>

            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/profesionales/psicologia">
                  Psicología
                </Link>
              </li>

              <li>
                <Link className="dropdown-item" to="/profesionales/psiquiatria">
                  Psiquiatría
                </Link>
              </li>

              <li>
                <Link
                  className="dropdown-item"
                  to="/profesionales/psicopedagogia"
                >
                  Psicopedagogía
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item mx-3">
            <Link className="nav-link" to="/">
              Iniciar/Registrarse
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarComponent;
