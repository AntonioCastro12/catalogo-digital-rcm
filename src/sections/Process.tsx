import { Reveal, SectionTitle } from "../components/UI";
const steps = [
  ["Cuéntanos tu idea", "Analizamos las necesidades del proyecto."],
  ["Diseñamos", "Creamos una propuesta adaptada a tu negocio."],
  ["Desarrollamos", "Convertimos el diseño en una solución funcional."],
  ["Probamos", "Revisamos funcionamiento y compatibilidad."],
  ["Publicamos", "Tu proyecto queda disponible para tus clientes."],
];
export default function Process() {
  return (
    <section className="section container process">
      <Reveal>
        <SectionTitle
          eyebrow="06 / ASÍ TRABAJAMOS"
          title="De la primera idea al siguiente nivel."
        />
      </Reveal>
      <div className="process-grid">
        {steps.map(([title, text], i) => (
          <Reveal key={title}>
            <div className="step-number">0{i + 1}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
