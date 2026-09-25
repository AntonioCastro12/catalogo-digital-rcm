import { Check, ArrowRight, Ticket } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Reveal, QuoteButton, SectionTitle } from "../components/UI";
import InvitationPreview from "../components/InvitationPreview";
import { invitationPackages, invitationExtras } from "../data/invitationPackages";
import { services } from "../data/services";
export default function Invitations() {
  const features = services.find((s) => s.id === "invitaciones")!.features;
  return (
    <section id="invitaciones" className="invitation-section section">
      <div className="container">
        <div className="invitation-grid">
          <Reveal>
            <span className="eyebrow">02 / MOMENTOS QUE CONECTAN</span>
            <h2>
              Invitaciones digitales
              <br />
              que convierten tu evento
              <br />
              en una <em>experiencia.</em>
            </h2>
            <p className="intro-copy">
              El primer detalle de un día inolvidable. Diseñamos una invitación
              tan especial como lo que vas a celebrar.
            </p>
            <div className="event-tags">
              {[
                "XV años",
                "Bodas",
                "Bautizos",
                "Cumpleaños",
                "Baby Shower",
                "Primera Comunión",
                "Eventos especiales",
              ].map((e) => (
                <span key={e}>{e}</span>
              ))}
            </div>
            <ul className="check-list invitation-features">
              {features.map((f) => (
                <li key={f}>
                  <Check size={15} />
                  {f}
                </li>
              ))}
            </ul>
            <QuoteButton message="Hola RCM CodeDev, quiero cotizar una invitación digital.">
              Crear mi invitación
            </QuoteButton>
          </Reveal>
          <Reveal>
            <InvitationPreview />
          </Reveal>
        </div>
        <Reveal className="pass-section">
          <div>
            <span className="eyebrow">
              <Ticket size={19} /> UN PASE, UNA EXPERIENCIA PERSONAL
            </span>
            <h3>Cada invitado tiene su lugar.</h3>
            <p>
              Pases personalizados y lugares asignados desde Premium. QR individual
              por invitado o familia desde Premium Plus. Validación del QR y
              control de acceso incluidos en VIP.
            </p>
          </div>
          <div className="guest-pass">
            <div>
              <span>PASE DE DEMOSTRACIÓN</span>
              <strong>Familia Valadez Hernández</strong>
              <p>
                Pase válido para <b>4 personas</b>
              </p>
              <small>Ejemplo visual · sin validez de acceso</small>
            </div>
            <QRCodeSVG
              value="RCM CodeDev | DEMOSTRACIÓN SIN VALIDEZ | Familia Valadez Hernández | 4 personas"
              size={84}
              bgColor="#f2effa"
              fgColor="#252035"
              title="QR de demostración, no válido para acceso"
            />
          </div>
        </Reveal>
        <Reveal>
          <SectionTitle
            eyebrow="ELIGE TU EXPERIENCIA"
            title="Un paquete para cada celebración."
            text="Seis paquetes desde $250 hasta $5,000 MXN. Cada nivel incluye las funciones del anterior."
          />
        </Reveal>
        <div className="package-grid">
          {invitationPackages.map((p) => (
            <Reveal key={p.name}>
              <article
                className={`package-card ${p.featured ? "featured" : ""}`}
              >
                {p.featured && (
                  <span className="package-badge">EXPERIENCIA VIP</span>
                )}
                <h3>{p.name}</h3>
                <p className="package-price">
                  {p.price === null
                    ? "Solicitar cotización"
                    : new Intl.NumberFormat("es-MX", {
                        style: "currency",
                        currency: "MXN",
                        maximumFractionDigits: 0,
                      }).format(p.price) + " MXN"}
                </p>
                <ul className="check-list">
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check size={14} />
                      {f}
                    </li>
                  ))}
                </ul>
                {p.recommendedFor && <p className="package-recommendation"><strong>Recomendado para:</strong> {p.recommendedFor}</p>}
                <QuoteButton
                  className={`button ${p.featured ? "primary" : "secondary"}`}
                  message={`Hola RCM CodeDev, quiero cotizar el paquete ${p.name} de invitaciones digitales.`}
                >
                  Elegir {p.name}
                </QuoteButton>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="invitation-package-notes">
          <div>
            <h3>Qué hace diferente al paquete VIP</h3>
            <p>Una invitación con gestión de invitados: confirmaciones almacenadas en base de datos, estadísticas para los anfitriones y QR único por invitado o familia. El día del evento permite validar entradas desde un celular, registrar la hora de acceso y evitar reutilizaciones.</p>
          </div>
          <div>
            <h3>Servicios que pueden cotizarse por separado</h3>
            <ul className="check-list">{invitationExtras.map(extra => <li key={extra}><Check size={16}/>{extra}</li>)}</ul>
          </div>
        </Reveal>
        <a className="text-button packages-note" href="#proyectos">
          Ver nuestros proyectos <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
