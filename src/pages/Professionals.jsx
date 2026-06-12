import { useMemo, useState } from 'react'
import './Professionals.css'

// ─── Datos ────────────────────────────────────────────────────────────────────

const specialties = [
  'Todas',
  'Psiquiatría',
  'Psicología',
  'Psicopedagogía',
  'Psicología infantil',
  'Terapia de pareja',
]

const carouselItems = [
  {
    title: 'Asistencia psicológica online',
    text: 'Agenda una consulta segura con profesionales disponibles.',
    image:
      'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Acompañamiento para núcleos familiares',
    text: 'Orientación cercana para niños, adolescentes y adultos responsables.',
    image:
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Profesionales destacados',
    text: 'Encuentra especialistas con el enfoque que buscas, la experiencia y modalidad de atención que prefieras.',
    image:
      'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80',
  },
]

function randomPrice() {
  return Math.floor((Math.random() * (1500 - 800)) / 100 + 8) * 100
}

const professionals = [
  {
    name: 'Dra. Franchesca Gomez',
    specialty: 'Psiquiatría',
    focus: 'Ansiedad, depresión y seguimiento farmacológico/psiquiátrico',
    schedule: 'Hoy 11:30',
    avatar: 'imagen',
    price: randomPrice(),
  },
  {
    name: 'Lic. Olivia González',
    specialty: 'Psicología',
    focus: 'Terapia cognitivo conductual para adultos',
    schedule: 'Hoy 16:00',
    avatar: 'imagen',
    price: randomPrice(),
  },
  {
    name: 'Lic. Soffia Linners',
    specialty: 'Psicopedagogía',
    focus: 'Dificultades de aprendizaje y orientación escolar',
    schedule: 'Lun 16:00',
    avatar: 'imagen',
    price: randomPrice(),
  },
  {
    name: 'Lic. Diego Ramierez',
    specialty: 'Psicología infantil',
    focus: 'Infancias, juego terapéutico y vínculos familiares',
    schedule: 'Lun 09:30',
    avatar: 'imagen',
    price: randomPrice(),
  },
  {
    name: 'Lic. Alicia Maravilla',
    specialty: 'Terapia de pareja',
    focus: 'Comunicación, acuerdos y acompañamiento vincular',
    schedule: 'Mar 19:00',
    avatar: 'AM',
    price: randomPrice(),
  },
  {
    name: 'Dra. Santino Olivera',
    specialty: 'Psiquiatría',
    focus: 'Salud mental perinatal y regulación emocional',
    schedule: 'Mie 12:00',
    avatar: 'imagen',
    price: randomPrice(),
  },
  {
    name: 'Dr. Ramiro Gonzalez',
    specialty: 'Psiquiatría',
    focus: 'Salud mental perinatal y regulación emocional',
    schedule: 'Jue 12:00',
    avatar: 'imagen',
    price: randomPrice(),
  },
  {
    name: 'Dra. Virginia López',
    specialty: 'Psicologo',
    focus: 'Salud mental perinatal y regulación emocional',
    schedule: 'Vie 16:00',
    avatar: 'imagen',
    price: randomPrice(),
  },
  {
    name: 'Dra. Santino Olivera',
    specialty: 'Psicopedadoga',
    focus: 'Dificultades de aprendizaje y orientación escolar',
    schedule: 'Vie 10:00',
    avatar: 'imagen',
    price: randomPrice(),
  },
]

const MAX_PRICE = Math.max(...professionals.map((p) => p.price))
const MIN_PRICE = Math.min(...professionals.map((p) => p.price))

// ─── Componente ───────────────────────────────────────────────────────────────

function Professionals() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('Todas')
  const [activeSlide, setActiveSlide] = useState(0)
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE)

  const filteredProfessionals = useMemo(() => {
    return professionals.filter((p) => {
      const matchesSpecialty =
        selectedSpecialty === 'Todas' || p.specialty === selectedSpecialty
      const matchesPrice = p.price <= maxPrice
      return matchesSpecialty && matchesPrice
    })
  }, [selectedSpecialty, maxPrice])

  const currentSlide = carouselItems[activeSlide]

  function moveSlide(direction) {
    setActiveSlide((current) => {
      const next = current + direction
      if (next < 0) return carouselItems.length - 1
      if (next >= carouselItems.length) return 0
      return next
    })
  }

  return (
    <section className="mh-section" aria-labelledby="mh-services-title">

      {/* Layout: sidebar + carousel */}
      <div className="mh-layout">

        {/* Sidebar */}
        <aside className="mh-sidebar">
          <div>
            <p className="mh-eyebrow">Especialidades</p>
            <h2 className="mh-sidebar-title">Filtra por profesional</h2>
          </div>

          <div className="mh-chip-list" role="list">
            {specialties.map((sp) => (
              <button
                key={sp}
                type="button"
                className={`mh-chip${selectedSpecialty === sp ? ' mh-chip--active' : ''}`}
                onClick={() => setSelectedSpecialty(sp)}
              >
                {sp}
              </button>
            ))}
          </div>

          {/* Filtro de precio */}
          <div className="mh-price-filter">
            <p className="mh-eyebrow">Precio por consulta</p>
            <p className="mh-price-value">
              Hasta ${maxPrice.toLocaleString('es-UY')}
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
              <span>${MIN_PRICE.toLocaleString('es-UY')}</span>
              <span>${MAX_PRICE.toLocaleString('es-UY')}</span>
            </div>
          </div>
        </aside>

        {/* Carousel */}
        <article className="mh-carousel">
          <img className="mh-carousel-img" src={currentSlide.image} alt="" />
          <div className="mh-carousel-content">
            <p className="mh-eyebrow mh-eyebrow--light">Servicios más solicitados</p>
            <h2 id="mh-services-title" className="mh-carousel-title">
              {currentSlide.title}
            </h2>
            <p className="mh-carousel-text">{currentSlide.text}</p>

            <div className="mh-carousel-controls">
              <button
                type="button"
                className="mh-carousel-btn"
                onClick={() => moveSlide(-1)}
                aria-label="Ver servicio anterior"
              >
                ‹
              </button>
              <div className="mh-dots" aria-label="Diapositivas">
                {carouselItems.map((item, i) => (
                  <button
                    key={item.title}
                    type="button"
                    className={`mh-dot${activeSlide === i ? ' mh-dot--active' : ''}`}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Ver ${item.title}`}
                  />
                ))}
              </div>
              <button
                type="button"
                className="mh-carousel-btn"
                onClick={() => moveSlide(1)}
                aria-label="Ver servicio siguiente"
              >
                ›
              </button>
            </div>
          </div>
        </article>
      </div>

      {/* Cabecera grilla */}
      <div className="mh-grid-heading">
        <div>
          <p className="mh-eyebrow">Profesionales</p>
          <h2 className="mh-sidebar-title">Perfiles disponibles</h2>
        </div>
        <p className="mh-result-count">
          {filteredProfessionals.length} resultado
          {filteredProfessionals.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Grilla de tarjetas */}
      <div className="mh-grid">
        {filteredProfessionals.map((professional) => (
          <article key={professional.name} className="mh-card">

            <div className="mh-card-horizontal">
              <div className="mh-avatar" aria-hidden="true">
                <img
                  className="mh-avatar-img"
                  src="https://www.flexengage.com/wp-content/uploads/2020/05/iconb.png"
                  alt="foto de perfil de cada profesional"
                />
              </div>

              <div className="mh-card-info">
                <h3 className="mh-card-name">{professional.name}</h3>
                <p className="mh-card-specialty">{professional.specialty}</p>
                <p className="mh-card-focus">{professional.focus}</p>
              </div>
            </div>

            <div className="mh-card-footer">
              <span className="mh-card-schedule">📅 {professional.schedule}</span>
              <span className="mh-card-price">
                ${professional.price.toLocaleString('es-UY')}
              </span>
              <button type="button" className="mh-card-btn">
                Agendar
              </button>
            </div>

          </article>
        ))}
      </div>
    </section>
  )
}

export default Professionals
