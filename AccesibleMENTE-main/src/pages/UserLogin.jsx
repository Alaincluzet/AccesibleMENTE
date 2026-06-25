import { useState } from "react";
import { Link } from "react-router-dom";
function UserLogin() {
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      tipoUsuario,
      loginId,
      password,
    });

    alert("Login enviado (mock)");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Inicio de sesión</h2>

              <form onSubmit={handleSubmit}>
                {/* Tipo de usuario */}
                <div className="mb-3">
                  <label className="form-label">Tipo de usuario</label>

                  <select
                    className="form-select"
                    value={tipoUsuario}
                    onChange={(e) => {
                      setTipoUsuario(e.target.value);
                      setLoginId(""); // reset al cambiar tipo
                    }}
                  >
                    <option value="">Seleccionar</option>
                    <option value="paciente">Paciente</option>
                    <option value="profesional">Profesional</option>
                  </select>
                </div>

               
                {tipoUsuario && (
                  <div className="mb-3">
                    <label className="form-label">
                      {tipoUsuario === "paciente"
                        ? "Correo electrónico"
                        : "Cédula de identidad"}
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={loginId}
                      onChange={(e) => setLoginId(e.target.value)}
                      placeholder={
                        tipoUsuario === "paciente"
                          ? "ej: correo@email.com"
                          : "ej: 12345678"
                      }
                      required
                    />
                  </div>
                )}

                
                <div className="mb-3">
                  <label className="form-label">Contraseña</label>

                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* BOTÓN */}
                <button
                  type="submit"
                  className="btn w-100 mt-3"
                  style={{
                    backgroundColor: "#485c21",
                    borderColor: "#6B8E23",
                    color: "white",
                  }}
                >
                  Iniciar sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;