import { useState } from "react";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import { Reveal, SectionTitle } from "../components/UI";
export default function Services() {
  const [filter, setFilter] = useState("Todos");
  const options = [
    "Todos",
    "Desarrollo",
    "Invitaciones",
    "Soluciones digitales",
    "NFC / QR",
  ];
  return (
    <section id="servicios" className="section container">
      <Reveal>
        <div className="section-heading-row">
          <SectionTitle
            eyebrow="01 / NUESTROS SERVICIOS"
            title="Todo lo que tu idea necesita."
            text="De una primera impresión a una solución completa. Encuentra lo que impulsa tu próximo paso."
          />
          <span className="outline-label">13 formas de crear contigo</span>
        </div>
        <div className="filters" aria-label="Filtrar servicios">
          {options.map((o) => (
            <button
              key={o}
              aria-pressed={o === filter}
              className={o === filter ? "active" : ""}
              onClick={() => setFilter(o)}
            >
              {o}
            </button>
          ))}
        </div>
      </Reveal>
      <div className="service-grid">
        {services
          .filter((s) => filter === "Todos" || s.category === filter)
          .map((s) => (
            <Reveal key={s.id}>
              <ServiceCard service={s} index={services.indexOf(s)} />
            </Reveal>
          ))}
      </div>
    </section>
  );
}
