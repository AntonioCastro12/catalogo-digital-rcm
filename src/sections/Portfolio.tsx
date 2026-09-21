import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolio";
import type { Project } from "../types";
import { Modal, QuoteButton, Reveal, SectionTitle } from "../components/UI";
export default function Portfolio() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section id="proyectos" className="section portfolio-section">
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="07 / EXPLORA LAS POSIBILIDADES"
            title="Ideas que puedes imaginar en tu marca."
            text="Una selección de conceptos de demostración. No representan trabajos para clientes reales."
          />
          <div className="filters" aria-label="Filtrar proyectos">
            {[
              "Todos",
              "Invitaciones",
              "Páginas web",
              "Sistemas",
              "Catálogos",
              "NFC",
              "Aplicaciones",
            ].map((f) => (
              <button
                key={f}
                className={filter === f ? "active" : ""}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="portfolio-grid">
          {portfolio
            .filter((p) => filter === "Todos" || filter === p.category)
            .map((p) => (
              <Reveal key={p.id}>
                <article className="project-card">
                  <div className={"project-image " + p.id}>
                    <img
                      src={p.image}
                      alt={`Concepto de ${p.category.toLowerCase()}: ${p.name}`}
                      width="800"
                      height="450"
                      loading="lazy"
                    />
                    <span className="demo-tag">CONCEPTO / DEMO</span>
                  </div>
                  <div className="project-body">
                    <span className="card-category">{p.category}</span>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <div className="project-tech">
                      {p.technologies.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    {p.url ? (
                      <a
                        href={p.url}
                        className="text-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver proyecto <ArrowUpRight size={17} />
                      </a>
                    ) : (
                      <button
                        className="text-button"
                        onClick={() => setSelected(p)}
                      >
                        Ver proyecto <ArrowUpRight size={17} />
                      </button>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
        </div>
      </div>
      {selected && (
        <Modal title={selected.name} onClose={() => setSelected(null)}>
          <span className="demo-tag inline">CONCEPTO DE DEMOSTRACIÓN</span>
          <img
            className="modal-image"
            src={selected.image}
            alt={selected.name}
            width="800"
            height="450"
          />
          <p>{selected.description}</p>
          <p className="demo-explanation">
            Esta propuesta ilustra el tipo de solución que podemos desarrollar.
            No es un proyecto de un cliente ni una aplicación en producción.
          </p>
          <QuoteButton
            message={`Hola RCM CodeDev, me interesa un proyecto similar al concepto «${selected.name}».`}
          >
            Quiero algo similar
          </QuoteButton>
        </Modal>
      )}
    </section>
  );
}
