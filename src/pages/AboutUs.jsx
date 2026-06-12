import NavbarComponent from "../components/layouts/NavBarComponent";
import "./AboutUs.css";
function AboutUs() {
  return (
    <main className="aboutUs">
      <section className="about-hero">
        <div className="about-text">
          <h1>¿Cómo funciona AccesibleMENTE?</h1>
          <p>
            Accesiblemente es una red pensada para agilizar el proceso de
            encontrar un terapeutas a precios accesibles, el funcionamiento es
            sencillo: -Accedes al portal donde se encuentran todos nuestros
            profesionales capacitados en diferentes áreas de la psicología.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            omnis laboriosam impedit dignissimos esse expedita consequatur
            excepturi, mollitia eaque dolores id quidem exercitationem tempora
            dolorem aliquid. Eveniet quidem commodi magnam?
          </p>
        </div>
        <div className="about-imagen">
          <span>imagen</span>
        </div>
      </section>
      <section className="about-cards">
        <article className="about-card">
          <h3>Misión</h3>
          <p>
            La misión de esta aplicación web es facilitar y agilizar la gestión
            a los profesionales y que todos los pacientes encuentren un
            terapeuta que se ajuste a su presupuesto, a sus horarios y a su
            modalidad predilecta.
          </p>
        </article>

        <article className="about-card">
          <h3>Valores</h3>
          <p>
            Los valores que busca transmitir este e-commerce son: -Todos y todas
            tienen derecho a ser asistidos en cuestiones de salud mental. -Ya
            que conocemos el sistema de salud Uruguayo y la manera en la que
            maneja la salud mental, buscamos brindar a la población una
            herramienta capaz de transmitirle tranquilidad y agilización en el
            proceso.
          </p>
        </article>
        <article className="about-card">
          <h3>Equipo</h3>
          <p>
            Este e-commerce fue realizado por Rafaella Camarri, Ignacio
            Fernandez y Alain Cluzet
          </p>
        </article>
      </section>
    </main>
  );
}

export default AboutUs;
