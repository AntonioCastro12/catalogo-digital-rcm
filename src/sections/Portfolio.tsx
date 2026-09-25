import { galleryMedia } from "../data/gallery";
import { QuoteButton, SectionTitle } from "../components/UI";

export default function Portfolio() {
  const projects = galleryMedia.filter(item => item.tab === "proyectos" && item.kind === "image");
  return <section id="proyectos" className="section portfolio-section">
    <div className="container">
      <SectionTitle eyebrow="PROYECTOS RCM" title="Conoce nuestros diseños" text="Catálogos y tarjetas para mostrar tus productos y recibir pedidos." />
      <div className="portfolio-grid">
        {projects.map(project => <article className="project-card" key={project.src}>
          <img src={project.src} alt={project.title} loading="lazy" style={{ width: "100%", height: 360, objectFit: "contain", background: "#06070b" }} />
          <div className="project-body">
            <span className="card-category">{project.category}</span>
            <h3>{project.title}</h3>
            <QuoteButton className="text-button accent" message={`Hola RCM CodeDev, me interesa un diseño como ${project.title}.`}>Solicitar información</QuoteButton>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
