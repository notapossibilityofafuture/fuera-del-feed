import { useState } from "react";
import {
  ArrowDown, ArrowUpRight, Menu, X, Instagram, Eye, MessageCircle,
  Sparkles, Heart, SlidersHorizontal, ChevronRight, Quote, Info
} from "lucide-react";

const stats = [
  {
    value: "41.1%",
    label: "se compara algunas veces con personas que ve en redes.",
    note: "Comparación física"
  },
  {
    value: "50%",
    label: "considera que las redes tienen un efecto algo negativo en la autoestima.",
    note: "Percepción de impacto"
  },
  {
    value: "35.7%",
    label: "ha pensado algunas veces en cambiar su apariencia después de ver contenido.",
    note: "Influencia del contenido"
  },
  {
    value: "33.9%",
    label: "considera útil seguir cuentas que promuevan la aceptación personal.",
    note: "Una posible respuesta"
  }
];

const categories = [
  {
    number: "01",
    title: "Edición y estándares de belleza",
    short: "Lo que aparece en pantalla no siempre muestra la realidad.",
    detail: "Las entrevistas muestran desconfianza ante filtros, retoques e imágenes creadas con inteligencia artificial. Aunque algunos adolescentes los ven como entretenimiento o expresión, también reconocen que pueden difundir estándares difíciles de alcanzar.",
    quote: "Hay demasiados filtros, demasiados retoques con IA. Yo no me fío de nada.",
    source: "Entrevista inicial"
  },
  {
    number: "02",
    title: "Comparación y presión por la apariencia",
    short: "Compararse sin conocer el contexto puede cambiar cómo nos vemos.",
    detail: "Algunas respuestas relacionan la comparación con inseguridad, vergüenza o el deseo de imitar a otras personas. Otras describen el contenido como una fuente de inspiración. El efecto no es igual para todos.",
    quote: "Porque se comparan con los de los videos sin saber contexto.",
    source: "Entrevista inicial"
  },
  {
    number: "03",
    title: "Validación externa y autoestima",
    short: "Los likes y comentarios pueden influir en cómo nos sentimos.",
    detail: "Los comentarios negativos pueden generar inseguridad y afectar el estado de ánimo, la vida personal e incluso el rendimiento escolar. La investigación también encontró personas que dicen restar importancia a esas reacciones.",
    quote: "Haciéndolo sentir inseguro consigo mismo, ya sea físicamente o de forma en general.",
    source: "Entrevista 4"
  },
  {
    number: "04",
    title: "Respuestas de cuidado y aceptación",
    short: "Elegir qué consumimos también es una decisión.",
    detail: "Entre las respuestas aparecen cambiar de contenido, dejar de usar una aplicación por un momento, hablar con amistades y aceptar las diferencias. Si alguien decide hacer un cambio personal, se propone que sea por decisión propia y de manera saludable.",
    quote: "Que si quieren cambiar algo de ellos mismos, pues, que lo hagan de una manera sana.",
    source: "Entrevista 6"
  }
];

const reflections = [
  {
    title: "¿Conoces el contexto?",
    body: "Una publicación es solo un fragmento. No siempre sabes qué pasó antes, qué se editó o qué quedó fuera de cámara.",
    action: "Antes de compararte, recuerda que no tienes toda la información."
  },
  {
    title: "¿Quién eligió que esto fuera un estándar?",
    body: "Las tendencias cambian y las plataformas repiten ciertos estilos. Que algo aparezca muchas veces no significa que sea una regla.",
    action: "Puedes cuestionar las ideas que ves repetidas en tu feed."
  },
  {
    title: "¿Cómo te hace sentir este contenido?",
    body: "Tu experiencia importa. Si una cuenta o publicación te hace sentir incómodo, puedes cambiar lo que consumes.",
    action: "Silenciar, dejar de seguir o tomar una pausa son opciones válidas."
  }
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["La investigación", "#investigacion"],
    ["Los datos", "#datos"],
    ["Lo que encontramos", "#hallazgos"],
    ["Haz una pausa", "#experiencia"]
  ];

  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Fuera del Feed, inicio">
        <span className="brand-mark">F.</span>
        <span>FUERA DEL FEED</span>
      </a>
      <nav className={open ? "nav nav-open" : "nav"} aria-label="Navegación principal">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href="#reflexion" onClick={() => setOpen(false)}>Reflexiona <ArrowUpRight size={14} /></a>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function SectionLabel({ children, number }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>;
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-topline">
        <span>UNA INVESTIGACIÓN SOBRE LA VIDA DIGITAL</span>
        <span>2026 / MÉXICO</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> REDES SOCIALES, AUTOESTIMA Y APARIENCIA</p>
          <h1>FUERA<br />DEL <em>FEED.</em></h1>
          <p className="hero-subtitle">No todo lo que ves<br />representa la realidad.</p>
          <p className="hero-description">Una mirada a cómo las imágenes, las tendencias y las opiniones en redes sociales pueden influir en la forma en que los adolescentes se perciben a sí mismos.</p>
          <a href="#investigacion" className="text-link">Conoce la investigación <ArrowDown size={16} /></a>
        </div>
        <div className="hero-art" aria-label="Composición gráfica abstracta sobre una pantalla y reflejos" role="img">
          <div className="art-index">IMAGEN / PERCEPCIÓN<br />ARCHIVO 001</div>
          <div className="art-frame">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-disc" />
            <div className="art-cut" />
            <div className="art-sticker">¿REAL<br />O EDITADO?</div>
            <div className="art-caption">LO QUE VES<br />NO ES TODO.</div>
          </div>
          <div className="art-side-note">OBSERVA<br />CUESTIONA<br />DECIDE</div>
          <div className="art-bottom">SCROLL PARA EXPLORAR <ArrowDown size={13} /></div>
        </div>
      </div>
      <div className="hero-footer">
        <span>UNA EXPERIENCIA DE DIVULGACIÓN</span>
        <span>01 — 06</span>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="section research-section" id="investigacion">
      <SectionLabel number="01">EL PUNTO DE PARTIDA</SectionLabel>
      <div className="research-grid">
        <h2>Una pantalla<br />también puede<br /><em>ser un espejo.</em></h2>
        <div className="research-text">
          <p className="lead">Las redes sociales forman parte de la vida diaria. En ellas vemos fotografías, videos, tendencias y opiniones que pueden influir en cómo pensamos sobre nuestra apariencia.</p>
          <p>Esta investigación busca conocer cómo las redes sociales influyen en la autoestima y en la percepción de la apariencia física de los adolescentes. No parte de la idea de que todas las experiencias sean iguales: también considera las respuestas positivas, neutrales y las estrategias de cuidado.</p>
          <div className="research-meta">
            <div><span>ENFOQUE</span><strong>Mixto: encuesta y entrevistas</strong></div>
            <div><span>PARTICIPANTES</span><strong>56 respuestas en encuesta</strong></div>
            <div><span>TEMA</span><strong>Adolescentes y redes sociales</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DataSection() {
  return (
    <section className="section data-section" id="datos">
      <SectionLabel number="02">LOS DATOS TAMBIÉN HABLAN</SectionLabel>
      <div className="data-heading">
        <h2>Detrás de cada<br /><em>porcentaje,</em> hay<br />una experiencia.</h2>
        <p>Resultados seleccionados de la encuesta aplicada a 56 personas. Estos datos describen las respuestas del grupo encuestado; no representan automáticamente a todos los adolescentes.</p>
      </div>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <article className="stat-card" key={stat.value}>
            <div className="stat-top"><span>0{index + 1}</span><span>{stat.note}</span></div>
            <strong>{stat.value}</strong>
            <p>{stat.label}</p>
            <div className="stat-line"><span style={{ width: stat.value }} /></div>
          </article>
        ))}
      </div>
      <p className="data-footnote"><Info size={14} /> Porcentajes tomados de la Actividad 5. Las preguntas miden aspectos distintos y no deben sumarse entre sí.</p>
    </section>
  );
}

function Findings() {
  const [active, setActive] = useState(0);
  const current = categories[active];
  return (
    <section className="section findings-section" id="hallazgos">
      <SectionLabel number="03">LO QUE ENCONTRAMOS</SectionLabel>
      <div className="findings-heading">
        <h2>Cuatro formas<br />de entender <em>el feed.</em></h2>
        <p>Las entrevistas se organizaron en cuatro categorías. Explora cada una para conocer qué dijeron los participantes y qué significado tiene dentro de la investigación.</p>
      </div>
      <div className="findings-layout">
        <div className="category-list" role="tablist" aria-label="Categorías de la investigación">
          {categories.map((category, index) => (
            <button
              key={category.number}
              className={active === index ? "category-tab active" : "category-tab"}
              onClick={() => setActive(index)}
              role="tab"
              aria-selected={active === index}
            >
              <span>{category.number}</span>
              <strong>{category.title}</strong>
              <ChevronRight size={18} />
            </button>
          ))}
        </div>
        <article className="category-detail" role="tabpanel">
          <span className="detail-number">{current.number} / CATEGORÍA</span>
          <h3>{current.title}</h3>
          <p className="detail-short">{current.short}</p>
          <p>{current.detail}</p>
          <blockquote><Quote size={20} /><span>“{current.quote}”</span></blockquote>
          <span className="quote-source">— {current.source}</span>
        </article>
      </div>
    </section>
  );
}

function Experience() {
  const [selected, setSelected] = useState(null);
  const [step, setStep] = useState(0);
  const item = reflections[step];

  return (
    <section className="section experience-section" id="experiencia">
      <SectionLabel number="04">UNA PAUSA EN TU SCROLL</SectionLabel>
      <div className="experience-grid">
        <div>
          <p className="eyebrow light-eyebrow">UNA EXPERIENCIA INTERACTIVA</p>
          <h2>Antes de seguir<br />deslizando, <em>piensa.</em></h2>
          <p className="experience-intro">No es un examen ni una evaluación de tu apariencia. Son tres preguntas para observar con más atención el contenido que consumes.</p>
          <div className="step-count">PREGUNTA 0{step + 1} / 03</div>
        </div>
        <div className="reflection-card">
          <div className="reflection-top"><Eye size={18} /><span>OBSERVA TU FEED</span></div>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <div className="reflection-actions">
            <button className="reflection-button" onClick={() => setSelected(selected === step ? null : step)}>
              {selected === step ? "Ocultar reflexión" : "Ver una idea"} <ArrowUpRight size={16} />
            </button>
            <div className="step-controls">
              <button onClick={() => { setStep((step + 2) % 3); setSelected(null); }} aria-label="Pregunta anterior"><ArrowDown className="rotate" size={17} /></button>
              <button onClick={() => { setStep((step + 1) % 3); setSelected(null); }} aria-label="Siguiente pregunta"><ArrowDown size={17} /></button>
            </div>
          </div>
          {selected === step && <div className="reflection-result"><Sparkles size={17} /><p>{item.action}</p></div>}
        </div>
      </div>
    </section>
  );
}

function Reflection() {
  return (
    <section className="section reflection-section" id="reflexion">
      <SectionLabel number="05">QUÉ PODEMOS HACER</SectionLabel>
      <div className="reflection-heading">
        <h2>Tu feed también<br />es una <em>elección.</em></h2>
        <p>No se trata de dejar todas las redes ni de desconfiar de cada publicación. Se trata de reconocer cómo te hace sentir lo que consumes y decidir qué lugar quieres darle.</p>
      </div>
      <div className="advice-grid">
        <article><SlidersHorizontal /><span>01 / SELECCIONA</span><h3>Revisa a quién sigues.</h3><p>Busca contenido que te aporte algo y considera silenciar cuentas que te generan incomodidad.</p></article>
        <article><MessageCircle /><span>02 / COMPARTE</span><h3>Habla con alguien.</h3><p>Compartir cómo te sientes con una amistad o persona de confianza puede ayudarte a ponerlo en perspectiva.</p></article>
        <article><Heart /><span>03 / RECUERDA</span><h3>Tu valor no es una métrica.</h3><p>Los likes, comentarios y tendencias no determinan quién eres ni cuánto vales.</p></article>
      </div>
      <div className="closing-note">
        <span>UNA IDEA PARA LLEVARTE</span>
        <p>“No tienes que convertirte en una versión de alguien más para sentirte bien contigo.”</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div><span className="footer-kicker">FIN DEL RECORRIDO / INICIO DE LA REFLEXIÓN</span><h2>FUERA DEL<br /><em>FEED.</em></h2></div>
        <div className="footer-info">
          <p>Proyecto de investigación: Influencia de las redes sociales en la autoestima y la apariencia física de los adolescentes.</p>
          <p><strong>Taller de Investigación</strong><br />Preparatoria Tecmilenio · 2026</p>
          <a href="#inicio">Volver al inicio ↑</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>PROYECTO DE DIVULGACIÓN CIENTÍFICA</span>
        <span>HECHO PARA MIRAR MÁS ALLÁ DE LA PANTALLA.</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Research />
        <DataSection />
        <Findings />
        <Experience />
        <Reflection />
      </main>
      <Footer />
    </>
  );
}
