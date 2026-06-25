import { useState } from "react";
import { Link } from "react-router-dom";

function UserSignUp() {
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tieneAntecedentes, setTieneAntecedentes] = useState("");
  const [tomaMedicacion, setTomaMedicacion] = useState(false);
  const [cedula, setCedula] = useState(""); // 👈 NUEVO

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Registro</h2>

              <form>
             
                <div className="mb-3">
                  <label className="form-label">Tipo de usuario</label>

                  <select
                    className="form-select"
                    value={tipoUsuario}
                    onChange={(e) => setTipoUsuario(e.target.value)}
                  >
                    <option value="">Seleccionar</option>
                    <option value="paciente">Paciente</option>
                    <option value="profesional">Profesional</option>
                  </select>
                </div>

                
                {tipoUsuario === "profesional" && (
                  <div className="mb-3">
                    <label className="form-label">
                      Cédula de identidad
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={cedula}
                      onChange={(e) => setCedula(e.target.value)}
                      placeholder="Ej: 12345678"
                      required
                    />
                  </div>
                )}

               
                <div className="mb-3">
                  <label className="form-label">Nombre completo</label>
                  <input type="text" className="form-control" />
                </div>

                
                <div className="mb-3">
                  <label className="form-label">Correo electrónico</label>
                  <input type="email" className="form-control" required />
                </div>

               
                <div className="mb-3">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="tel"
                    className="form-control"
                    pattern="[0-9]{8,15}"
                    required
                  />
                </div>

               
                <div className="mb-3">
                  <label className="form-label">Fecha de nacimiento</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="dd/mm/aaaa"
                    pattern="^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$"
                    title="Formato: dd/mm/aaaa"
                    required
                  />
                </div>

              
                {tipoUsuario === "paciente" && (
                  <>
                    <hr />

                    <h4 className="mb-3">Motivo de consulta</h4>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Ansiedad o preocupación excesiva
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Estrés</label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Tristeza o angustia persistente
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Autoestima</label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Problemas familiares
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Problemas de pareja
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Problemas/estrés laboral
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Duelo o pérdida reciente
                      </label>
                    </div>

                    <h4 className="mt-4">Síntomas actuales</h4>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Tristeza/angustia constante
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Preocupación excesiva
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Dificultad para dormir
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Cansancio o falta de energía
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Desmotivación generalizada
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Irritabilidad</label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Ataques de pánico
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Dificultad para concentrarme
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Cambios en el apetito
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Sensación de soledad o aislamiento
                      </label>
                    </div>

                    <h4 className="mt-4">
                      Antecedentes de salud mental
                    </h4>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="antecedentes"
                        value="no"
                        checked={tieneAntecedentes === "no"}
                        onChange={(e) =>
                          setTieneAntecedentes(e.target.value)
                        }
                      />
                      <label className="form-check-label">
                        Nunca he recibido atención
                      </label>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="antecedentes"
                        value="si"
                        checked={tieneAntecedentes === "si"}
                        onChange={(e) =>
                          setTieneAntecedentes(e.target.value)
                        }
                      />
                      <label className="form-check-label">
                        Sí, he recibido atención anteriormente
                      </label>
                    </div>

                    {tieneAntecedentes === "si" && (
                      <>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label">
                            Actualmente hago terapia
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={tomaMedicacion}
                            onChange={(e) =>
                              setTomaMedicacion(e.target.checked)
                            }
                          />
                          <label className="form-check-label">
                            Tomo medicación psiquiátrica
                          </label>
                        </div>

                        {tomaMedicacion && (
                          <div className="mt-3">
                            <label className="form-label">
                              ¿Qué medicación?
                            </label>
                            <textarea
                              className="form-control"
                              rows="3"
                            />
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}

               
                {tipoUsuario === "profesional" && (
                  <>
                    <hr />

                    <h4 className="mb-3">Datos profesionales</h4>

                    <div className="mb-3">
                      <label className="form-label">Especialidad</label>
                      <select className="form-select">
                        <option>Psicología</option>
                        <option>Psiquiatría</option>
                        <option>Psicopedagogía</option>
                        <option>Terapia de pareja</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        Documentación profesional
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        Valor de consulta
                      </label>
                      <input type="number" className="form-control" />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="btn w-100 mt-4"
                  style={{
                    backgroundColor: "#485c21",
                    borderColor: "#6B8E23",
                    color: "white",
                  }}
                >
                  Registrarse
                </button>
                <Link to="/login">Ya tengo cuenta</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;