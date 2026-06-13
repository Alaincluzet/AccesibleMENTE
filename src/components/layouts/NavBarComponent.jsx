import "./NavbarComponent.css";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand mi-navbar">
      <div className="container-fluid">

        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/logo navbar-footer - copia.png"
            alt="AccesibleMENTE"
            className="logo-navbar"
          />

          <span className="texto-logo">
            AccesibleMENTE
          </span>
        </Link>

        <ul className="navbar-nav ms-auto flex-row">

          <li className="nav-item mx-3">
            <Link className="nav-link" to="/">
              Sobre Nosotros
            </Link>
          </li>

         <li className="nav-item mx-3">
         <Link className="nav-link" to="/profesionales">
         Profesionales
         </Link>
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