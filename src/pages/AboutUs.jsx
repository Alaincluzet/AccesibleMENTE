import { Link, Links } from "react-router-dom";
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
            encontrar un terapeuta a precios accesibles, el funcionamiento es
            sencillo:
          </p>
          <ul>
            <li>-Creas tu usuario</li>
            <li>-Buscás el terapeuta que se adecúe a tus necesidades.</li>
            <li>-Listo, empezas tu proceso terapéutico.</li>
          </ul>
          <p id="text">
            ¿No contas con recursos? Ponete en contacto con nosotros y evaluamos
            tu caso.
          </p>
        </div>
        <div className="about-imagen">
          <img src="/hero.png" alt="sesion-de-terapia" />
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
      <section className="about-info">
        <div className="about-info-box">
          <h1>
            {" "}
            ¿Qué es <u>AccesibleMENTE?</u>
          </h1>
          <p>
            AccesibleMENTE nace de una idea colectiva de 3 estudiantes de
            desarrollo web que participan en conjunto para suplir una necesidad
            en la población. Realizamos encuestas y los datos que manifestaron
            fueron casi unánimes, mucha gente quiere mejorar su salud mental y
            el mayor problema siempre era el económico, aparte de otras razones
            como falta de tiempo, largas esperas para recibir turno. Por eso
            creamos accesibleMENTE una red que conecta profesionales de la salud
            mental con la gente. Muchos se cuestionaran ¿Qué la hace tan
            especial? Nosotros no solo pensamos en el dinero, la membresía que
            los profesionales van a adquirir viene con una pequeña cláusula que
            está clarísima desde el primer momento, a cada profesional vamos a
            pedirles que nos donen 4 horas a la semana pro-bono para aquellos
            que no pueden acceder por problemas económicos.
          </p>
        </div>
      </section>
      <section className="about-register">
        <p>
          Unite a esta causa solidaria -{" "}
          <Link to="/registro">Registrate aquí</Link>
        </p>
      </section>
    </main>
  );
}

export default AboutUs;
