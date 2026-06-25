import NavbarComponent from "../components/layouts/NavBarComponent";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-container">
      <header className="home-header">
        <h1>¡HOLA!</h1>
        <h2>Bienvenido a AccesibleMENTE</h2>
        <p>Un espacio donde la salud mental es accesible para todos</p>
      </header>
      <section className="cards-container">

        <div className="home-card">
          <h2>¿Buscas un especialista de la salud mental?</h2>

          <p>
            En AccesibleMENTE podes encontrar profesionales de la salud mental con honorarios accesibles
            y comenzar tu proceso de acompañamiento.
          </p>

          <Link to="/registro">
            <button className="btn-card">
              Crear perfil
            </button>
          </Link>
        </div>

        <div className="home-card">
          <h2>¿Sos profesional de la salud mental y estás buscando ampliar tu espectro de pacientes?</h2>

          <p>
            Sumate a nuestra red de profesionales y conectá con personas que
            necesitan acompañamiento.
          </p>

          <Link to="/registro">
            <button className="btn-card">
              Crear perfil
            </button>
          </Link>
        </div>

      </section>
    </main>
  );
}

export default Home;