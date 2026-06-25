import { useEffect, useState } from "react";
import "./FooterComponent.css";

function FooterComponent() {
  const [hora, setHora] = useState(
    new Date().toLocaleTimeString("es-UY")
  );

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString("es-UY"));
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
 <footer className="mi-footer">
  <div className="footer-contenido">

    <div className="footer-izquierda">
      <img
        src="/logo navbar-footer - copia.png"
        alt="AccesibleMENTE"
        className="footer-arbol"
      />

      <span className="footer-texto">
        AccesibleMENTE
      </span>
    </div>

    <div className="footer-centro"></div>

    <div className="footer-reloj">
      {hora}
    </div>

  </div>
</footer>
  );
}

export default FooterComponent;