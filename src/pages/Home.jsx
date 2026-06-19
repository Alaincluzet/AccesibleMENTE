import NavbarComponent from "../components/layouts/NavBarComponent";
import "./Home.css";

function Home() {
  return (
    <>

      <main className="home-container">

        <section className="cards-container">

          <div className="home-card">
            <h2>¿Buscas un especialista de la salud mental?</h2>

            <p>
              En AccesibleMENTE podes encontrar profesionales de la salud mental con honorarios accesibles
              y comenzar tu proceso de acompañamiento.
            </p>

            <button className="btn-card">
              Crear perfil
            </button>
          </div>

          <div className="home-card">
            <h2>¿Sos profesional de la salud mental y estás buscando ampliar tu espectro de pacientes?</h2>

            <p>
              Sumate a nuestra red de profesionales y conectá con personas que
              necesitan acompañamiento.
            </p>

            <button className="btn-card">
              Crear perfil
            </button>
          </div>

        </section>

      </main>
    </>
  );
}

export default Home;