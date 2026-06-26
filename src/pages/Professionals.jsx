import { useMemo, useState } from "react";
import { es } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import "./Professionals.css";

const specialties = [
  "Todas",
  "Psiquiatría",
  "Psicología",
  "Psicopedagogía",
  "Psicología infantil",
  "Terapia de pareja",
];

const carouselItems = [
  {
    title: "Asistencia psicológica online",
    text: "Agenda una consulta segura con profesionales disponibles.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Acompañamiento para núcleos familiares",
    text: "Orientación cercana para niños, adolescentes y adultos responsables.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Profesionales destacados",
    text: "Encuentra especialistas con el enfoque que buscas, la experiencia y modalidad de atención que prefieras.",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80",
  },
];

const professionals = [
  {
    name: "Dra. Franchesca Gomez",
    specialty: "Psiquiatría",
    focus: "Ansiedad, depresión y seguimiento farmacológico/psiquiátrico",
    price: 500,
    image:
      "https://i.pinimg.com/736x/b8/68/20/b86820c5296cfd042edf7d72dc9e579a.jpg",
    bio: "Acompaña procesos vinculados a ansiedad, estado de ánimo y tratamientos psiquiátricos con una mirada cercana. Su trabajo busca ordenar síntomas, revisar hábitos cotidianos y construir un plan de cuidado sostenible para cada persona.",
    therapyTypes: [
      "Psiquiatría clínica",
      "Ansiedad",
      "Depresión",
      "Seguimiento farmacológico",
      "Autoestima",
      "Adicciones",
      "Fortalecimiento de vínculos",
    ],
  },
  {
    name: "Lic. Olivia González",
    specialty: "Psicología",
    focus: "Terapia cognitivo conductual para adultos",
    price: 400,
    image:
      "https://i.pinimg.com/736x/e5/8b/93/e58b93a5044f1779dbb6ae50d251d0b3.jpg",
    bio: "Trabaja con adultos desde un enfoque cognitivo conductual, ayudando a reconocer patrones de pensamiento y conducta que generan malestar. Propone objetivos claros, recursos prácticos y un espacio de conversación cuidado.",
    therapyTypes: ["TCC", "Adultos", "Regulación emocional", "Autoestima"],
  },
  {
    name: "Lic. Soffia Linners",
    specialty: "Psicopedagogía",
    focus: "Dificultades de aprendizaje y orientación escolar",
    price: 450,
    image:
      "https://i.pinimg.com/1200x/ac/f4/8c/acf48c8411b1257725a1af63150091ea.jpg",
    bio: "Se especializa en dificultades de aprendizaje y orientación escolar. Acompaña a niños, adolescentes y familias para comprender qué está pasando en el proceso educativo y encontrar estrategias concretas para avanzar.",
    therapyTypes: [
      "Psicopedagogía",
      "Aprendizaje",
      "Orientación familiar",
      "Técnicas de estudio",
    ],
  },
  {
    name: "Lic. Diego Ramírez",
    specialty: "Psicología infantil",
    focus: "Infancias, juego terapéutico y vínculos familiares",
    price: 350,
    image:
      "https://i.pinimg.com/1200x/f7/70/c7/f770c7c8d3041bade2bf9e96efb974a8.jpg",
    bio: "Ofrece acompañamiento a infancias y familias desde el juego terapéutico y el trabajo vincular. Su propuesta está pensada para crear confianza, escuchar lo que el niño expresa y fortalecer herramientas en casa.",
    therapyTypes: [
      "Infancias",
      "Juego terapéutico",
      "Vínculos familiares",
      "Conducta",
      "Estrés",
      "Comunicacion",
      "Confianza",
    ],
  },
  {
    name: "Lic. Alicia Maravilla",
    specialty: "Terapia de pareja",
    focus: "Comunicación, acuerdos y acompañamiento vincular",
    price: 500,
    image:
      "https://i.pinimg.com/736x/f6/ed/5c/f6ed5c531dfd847de6b965dc56dbb62a.jpg",
    bio: "Acompaña parejas que buscan mejorar la comunicación, revisar acuerdos y transitar conflictos con más claridad. Su enfoque prioriza el diálogo, la escucha de ambas partes y la construcción de cambios posibles.",
    therapyTypes: [
      "Terapia de pareja",
      "Comunicación",
      "Acuerdos",
      "Crisis vincular",
      "Habitos Saludables",
      "Fortalecimiento de relaciones",
    ],
  },
  {
    name: "Dra. Santino Olivera",
    specialty: "Psiquiatría",
    focus: "Salud mental perinatal y regulación emocional",
    price: 450,
    image:
      "https://i.pinimg.com/736x/7e/4f/f7/7e4ff7f31a18bc9ff19e49bb4183339b.jpg",
    bio: "Trabaja en salud mental perinatal, regulación emocional y acompañamiento psiquiátrico. Ofrece un espacio para ordenar síntomas, cuidar el descanso y sostener decisiones clínicas de forma respetuosa.",
    therapyTypes: [
      "Psiquiatría",
      "Adolescencia",
      "Regulación emocional",
      "Acompañamiento clínico",
      "Terapia de Pareja",
    ],
  },
  {
    name: "Dr. Ramiro Gonzalez",
    specialty: "Psiquiatría",
    focus: "Salud mental perinatal y regulación emocional",
    price: 400,
    image:
      "https://i.pinimg.com/1200x/d1/87/43/d18743c1adc725dc29bc4f93b9637853.jpg",
    bio: "Brinda atención psiquiátrica orientada a personas que atraviesan estrés, cambios vitales o síntomas persistentes. Combina evaluación clínica, seguimiento y recomendaciones personalizadas para recuperar estabilidad.",
    therapyTypes: [
      "Terapia familiar",
      "Evaluación psiquiátrica",
      "Estrés",
      "Seguimiento clinico",
      "Salud integral",
    ],
  },
  {
    name: "Dra. Virginia López",
    specialty: "Psicología",
    focus: "Salud mental perinatal y regulación emocional",
    price: 500,
    image:
      "https://i.pinimg.com/1200x/ab/ae/8f/abae8f30ed7e9b4b650e02ff689e5395.jpg",
    bio: "Acompaña procesos de ansiedad, duelos y momentos de transición personal. Su forma de trabajo busca generar un espacio amable donde poner en palabras lo que preocupa y encontrar nuevos modos de afrontarlo.",
    therapyTypes: [
      "Psicoterapia",
      "traumas",
      "Ansiedad",
      "Duelo",
      "Cambios vitales",
      "Depresion",
      "Trastornos alimentarios",
    ],
  },
  {
    name: "Lic. Carmen Suárez",
    specialty: "Psicopedagogía",
    focus: "Dificultades de aprendizaje y orientación escolar",
    price: 300,
    image:
      "https://i.pinimg.com/736x/74/5d/6e/745d6e90aa416d4f75d079e9ef874d63.jpg",
    bio: "Orienta a estudiantes y familias ante dificultades escolares, organización del estudio y motivación. Trabaja con recursos concretos para mejorar la autonomía, la confianza y el vínculo con el aprendizaje.",
    therapyTypes: [
      "Psicopedagogía",
      "Hábitos de estudio",
      "Motivación",
      "Acompañamiento escolar",
      "Guia Escolar",
      "Desarrollo emocional y conductual de niños",
    ],
  },
];

const MAX_PRICE = Math.max(...professionals.map((p) => p.price));
const MIN_PRICE = Math.min(...professionals.map((p) => p.price));

function Professionals() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todas");
  const [activeSlide, setActiveSlide] = useState(0);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [selectedDates, setSelectedDates] = useState({});

  const [confirmedAppointment, setConfirmedAppointment] = useState(null);

  const filteredProfessionals = useMemo(() => {
    return professionals.filter((p) => {
      const matchesSpecialty =
        selectedSpecialty === "Todas" || p.specialty === selectedSpecialty;
      return matchesSpecialty && p.price <= maxPrice;
    });
  }, [selectedSpecialty, maxPrice]);

  const currentSlide = carouselItems[activeSlide];

  function moveSlide(direction) {
    setActiveSlide((current) => {
      const next = current + direction;
      if (next < 0) return carouselItems.length - 1;
      if (next >= carouselItems.length) return 0;
      return next;
    });
  }

  function selectProfessionalDate(professionalName, date) {
    if (!date) return;
    setSelectedDates((current) => ({
      ...current,
      [professionalName]: date,
    }));
  }

  function confirmProfessionalAppointment(professionalName) {
    const date = selectedDates[professionalName];
    if (!date) return;
    setConfirmedAppointment({
      professionalName,
      date,
    });
  }
  function getSelectedDateLabel(date) {
    if (!date) return "Elegí el día de tu cita";
    return date.toLocaleDateString("es-UY", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <section className="mh-section" aria-labelledby="mh-services-title">
      <div className="mh-layout">
        <aside className="mh-sidebar">
          <div>
            <p className="mh-eyebrow">Especialidades</p>
            <h2 className="mh-sidebar-title text-center">
              Elige la especialidad que buscas
            </h2>
          </div>
          <div className="mh-chip-list" role="list">
            {specialties.map((sp) => (
              <button
                key={sp}
                type="button"
                className={`mh-chip${selectedSpecialty === sp ? " mh-chip--active" : ""}`}
                onClick={() => setSelectedSpecialty(sp)}
              >
                {sp}
              </button>
            ))}
          </div>
          <div className="mh-price-filter">
            <p className="mh-eyebrow">Precio por consulta</p>
            <p className="mh-price-value">
              Hasta ${maxPrice.toLocaleString("es-UY")}
            </p>
            <input
              type="range"
              className="mh-range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={100}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              aria-label="Precio máximo"
            />
            <div className="mh-price-limits">
              <span>${MIN_PRICE.toLocaleString("es-UY")}</span>
              <span>${MAX_PRICE.toLocaleString("es-UY")}</span>
            </div>
          </div>
        </aside>

        <article className="mh-carousel">
          <img className="mh-carousel-img" src={currentSlide.image} alt="" />
          <div className="mh-carousel-content">
            <p className="mh-eyebrow mh-eyebrow--light">
              Servicios más solicitados
            </p>
            <h2 id="mh-services-title" className="mh-carousel-title">
              {currentSlide.title}
            </h2>
            <p className="mh-carousel-text">{currentSlide.text}</p>
            <div className="mh-carousel-controls">
              <button
                type="button"
                className="mh-carousel-btn"
                onClick={() => moveSlide(-1)}
                aria-label="Anterior"
              >
                ‹
              </button>
              <div className="mh-dots">
                {carouselItems.map((item, i) => (
                  <button
                    key={item.title}
                    type="button"
                    className={`mh-dot${activeSlide === i ? " mh-dot--active" : ""}`}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Ver ${item.title}`}
                  />
                ))}
              </div>
              <button
                type="button"
                className="mh-carousel-btn"
                onClick={() => moveSlide(1)}
                aria-label="Siguiente"
              >
                ›
              </button>
            </div>
          </div>
        </article>

        <aside className="mh-help-panel">
          <div className="mh-help-body">
            <div>
              <p className="mh-eyebrow">Comenzá hoy</p>
              <h2 className="mh-help-title">Agenda tu primera consulta</h2>
            </div>
            <p className="mh-help-text">
              Elegí el profesional que mejor se adapte a tus necesidades y
              reservá tu horario en pocos minutos.
            </p>
            <ul className="mh-help-list">
              <li>Agenda inmediata</li>
              <li>Atención online</li>
              <li>Profesionales certificados</li>
            </ul>
          </div>
          <button
            type="button"
            onClick={() => {
              setShowModal(true);
              setShowForm(false);
              setSelectedDate(null);
            }}
            className="mh-help-btn"
          >
            Solicitar agenda
          </button>
          {showModal && (
            <div className="agenda-modal-overlay">
              <div className="agenda-modal">
                <button
                  type="button"
                  className="agenda-modal-close"
                  onClick={() => {
                    setShowModal(false);
                    setShowForm(false);
                    setSelectedDate(null);
                  }}
                >
                  x
                </button>
                <h2>Solicitar agenda</h2>
                {!showForm && (
                  <>
                    <p>Seleccioná una fecha para tu consulta.</p>
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        if (!date) return;
                        setSelectedDate(date);
                        setShowForm(true);
                      }}
                      locale={es}
                      weekStartsOn={1}
                      showOutsideDays
                    />
                  </>
                )}
                {showForm && (
                  <form>
                    <p>
                      Fecha seleccionada: {""}
                      {selectedDate.toLocaleDateString("es-UY")}
                    </p>
                    <input type="text" placeholder="Nombre completo" />
                    <input type="email" placeholder="Correo electrónico" />
                    <input type="tel" placeholder="Teléfono o celular" />
                    <textarea placeholder="Motivo de consulta"></textarea>
                    <button type="submit">Enviar solicitud</button>
                  </form>
                )}
              </div>
            </div>
          )}
        </aside>
      </div>

      <div className="mh-grid-heading">
        <div>
          <p className="mh-eyebrow">Profesionales</p>
          <h2 className="mh-sidebar-title">Perfiles disponibles</h2>
        </div>
        <p className="mh-result-count">
          {filteredProfessionals.length} resultado
          {filteredProfessionals.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="mh-grid">
        {filteredProfessionals.map((professional) => (
          <article
            key={`${professional.name}-${professional.schedule}`}
            className="mh-card"
          >
            <div className="mh-card-horizontal">
              <div className="mh-profile-media">
                <div className="mh-avatar">
                  <img
                    className="mh-avatar-img"
                    src={professional.image}
                    alt={`Foto de ${professional.name}`}
                  />
                </div>
                <div className="mh-photo-meta">
                  <span className="mh-card-price">
                    ${professional.price.toLocaleString("es-UY")}
                  </span>
                  <span className="mh-consultation-note">
                    Online o presencial
                  </span>
                </div>
              </div>
              <div className="mh-card-info">
                <h3 className="mh-card-name">{professional.name}</h3>
                <p className="mh-card-specialty">{professional.specialty}</p>
                <p className="mh-card-focus">{professional.focus}</p>
                <p className="mh-card-bio">{professional.bio}</p>
                <div
                  className="mh-therapy-list"
                  aria-label={`Tipos de terapia de ${professional.name}`}
                >
                  {professional.therapyTypes.map((type) => (
                    <span key={type}>{type}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mh-card-footer">
              <div
                className="mh-card-calendar"
                aria-label={`Calendario para agendar con ${professional.name}`}
              >
                <p className="mh-calendar-label">
                  {getSelectedDateLabel(selectedDates[professional.name])}
                </p>
                <DayPicker
                  mode="single"
                  selected={selectedDates[professional.name]}
                  onSelect={(date) =>
                    selectProfessionalDate(professional.name, date)
                  }
                  locale={es}
                  weekStartsOn={1}
                  showOutsideDays
                />
              </div>
              <button
                type="button"
                className="mh-card-btn"
                disabled={!selectedDates[professional.name]}
                onClick={() =>
                  confirmProfessionalAppointment(professional.name)
                }
              >
                Agendar
              </button>
            </div>
          </article>
        ))}
      </div>

      {confirmedAppointment && (
        <div
          className="mh-modal-backdrop"
          role="presentation"
          onClick={() => setConfirmedAppointment(null)}
        >
          <div
            className="mh-confirmation-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mh-confirmation-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="mh-modal-close"
              aria-label="Cerrar confirmación"
              onClick={() => setConfirmedAppointment(null)}
            ></button>
            <p className="mh-confirmation-kicker">Cita confirmada</p>
            <h2 id="mh-confirmation-title">Su cita ha sido confirmada</h2>
            <p>
              La {confirmedAppointment.professionalName} se pondrá en contacto
              contigo a la brevedad, te esperamos el{" "}
              <strong>{getSelectedDateLabel(confirmedAppointment.date)}</strong>
              .
            </p>
            <button
              type="button"
              className="mh-confirmation-btn"
              onClick={() => setConfirmedAppointment(null)}
            >
              Confirmar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Professionals;
