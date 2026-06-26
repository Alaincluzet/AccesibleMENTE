import "./Home.css";
import NavbarComponent from "../components/layouts/NavBarComponent";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-container">
      <header className="home-header">
        <h1>¡HOLA!</h1>
        <h2>Bienvenido a AccesibleMENTE</h2>
      </header>

      <section className="cards-container">
        <div className="home-card">
          <h2>¿Buscas un especialista de la salud mental?</h2>

          <p>
            En AccesibleMENTE podes encontrar profesionales de la salud mental
            con honorarios accesibles y comenzar tu proceso de acompañamiento.
          </p>

          <Link to="/registro">
            <button className="btn-card">Crear perfil</button>
          </Link>
        </div>

        <div className="home-card">
          <h2>
            ¿Sos profesional de la salud mental y estás buscando ampliar tu
            espectro de pacientes?
          </h2>

          <p>
            Sumate a nuestra red de profesionales y conectá con personas que
            necesitan acompañamiento.
          </p>

          <Link to="/registro">
            <button className="btn-card">Crear perfil</button>
          </Link>
        </div>
      </section>
      <section className="hero-background-text">
      <h2>La salud al alcance de todos</h2>
      </section>

    
      <section className="home-simbolos">
        <img
          src="/simbolos web1.png"
          alt="Equilibrio emocional"
          className="simbolo"
        />

        <img
          src="/simbolos web2.png"
          alt="Poder y acción"
          className="simbolo"
        />

        <img
          src="/simbolos web3.png"
          alt="Tranquilidad y espacio"
          className="simbolo"
        />
      </section>
    </main>
  );
}

export default Home;