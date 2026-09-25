import { Images, Contact, Check } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Reveal, QuoteButton } from "../components/UI";
export default function NFC() {
  return (
    <section id="nfc" className="section container">
      <div className="nfc-grid">
        <Reveal className="nfc-experience">
          <img
            src="/media/foto-09.jpeg"
            alt="Tarjeta digital para odontólogos con código QR"
            width="1024"
            height="1024"
            loading="lazy"
          />
        </Reveal>
        <Reveal>
          <span className="eyebrow">03 / DEL MUNDO FÍSICO AL DIGITAL</span>
          <h2>
            Tu información
            <br />a un toque
            <br />
            <span className="accent">de distancia.</span>
          </h2>
          <p className="intro-copy">
            Acerca tu llavero al celular o escanea su QR. Comparte tu negocio,
            tus redes o los recuerdos de un gran día.
          </p>
          <div className="nfc-benefits">
            {[
              "Tecnología NFC + QR",
              "Personalización e impresión 3D",
              "Acceso inmediato desde celular",
              "No necesita aplicación",
            ].map((f) => (
              <span key={f}>
                <Check size={16} />
                {f}
              </span>
            ))}
          </div>
          <div className="event-tags">
            {[
              "Tarjetas de presentación",
              "Negocios",
              "Redes sociales",
              "Eventos",
              "Recuerdos",
              "Álbumes",
              "Menús",
              "Contacto",
            ].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <QuoteButton message="Hola RCM CodeDev, quiero información sobre llaveros NFC + QR.">
            Quiero conectar mi negocio
          </QuoteButton>
        </Reveal>
      </div>
      <div className="digital-duo">
        <Reveal>
          <article>
            <Contact className="accent" />
            <h3>Tu presentación, siempre contigo.</h3>
            <p>
              Tarjetas digitales con WhatsApp, teléfono, correo, redes sociales,
              ubicación, servicios, horarios y botón para guardar contacto.
            </p>
            <QuoteButton
              className="text-button accent"
              message="Hola RCM CodeDev, quiero cotizar una tarjeta digital."
            >
              Cotizar tarjeta digital
            </QuoteButton>
          </article>
        </Reveal>
        <Reveal>
          <article>
            <Images className="accent" />
            <h3>Recuerdos que vuelven a vivirse.</h3>
            <p>
              Llaveros personalizados y recuerdos 3D que abren fotografías,
              videos, galerías y la página de tu evento desde QR o NFC.
            </p>
            <QuoteButton
              className="text-button accent"
              message="Hola RCM CodeDev, quiero cotizar recuerdos y un álbum digital."
            >
              Crear mis recuerdos digitales
            </QuoteButton>
          </article>
        </Reveal>
        <Reveal>
          <article className="qr-panel">
            <QRCodeSVG
              value={new URL("#contacto", window.location.href).href}
              size={86}
              fgColor="#dfdbff"
              bgColor="#15151e"
              title="Escanea para contactar a RCM CodeDev"
            />
            <div>
              <h3>Una puerta a tu mundo digital.</h3>
              <p>
                Escanea este código para abrir nuestros datos de contacto.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
