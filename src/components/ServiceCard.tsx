import { useState } from "react";
import {
  Globe,
  Layers,
  Smartphone,
  Heart,
  Contact,
  Nfc,
  Gift,
  Images,
  BookOpen,
  Utensils,
  QrCode,
  Box,
  Monitor,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "../types";
import { Modal, QuoteButton } from "./UI";
const icons: Record<string, LucideIcon> = {
  Globe,
  Layers,
  Smartphone,
  Heart,
  Contact,
  Nfc,
  Gift,
  Images,
  BookOpen,
  Utensils,
  QrCode,
  Box,
  Monitor,
};
export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const Icon = icons[service.icon] ?? Globe;
  return (
    <>
      <article className="service-card">
        <div className="card-top">
          <span className="service-icon">
            <Icon size={25} />
          </span>
          <span className="card-number">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <span className="card-category">{service.category}</span>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <ul className="feature-preview">
          {service.features.slice(0, 3).map((f) => (
            <li key={f}>
              <Check size={14} />
              {f}
            </li>
          ))}
        </ul>
        <div className="card-actions">
          <button className="text-button" onClick={() => setOpen(true)}>
            Más información <ArrowRight size={15} />
          </button>
          <QuoteButton
            className="text-button accent"
            message={`Hola RCM CodeDev, quiero cotizar ${service.name}.`}
          />
        </div>
      </article>
      {open && (
        <Modal title={service.name} onClose={() => setOpen(false)}>
          <p>{service.description}</p>
          <ul className="check-list">
            {service.features.map((f) => (
              <li key={f}>
                <Check size={16} />
                {f}
              </li>
            ))}
          </ul>
          <QuoteButton
            message={`Hola RCM CodeDev, quiero información y una cotización sobre ${service.name}.`}
          >
            Cotizar este servicio
          </QuoteButton>
        </Modal>
      )}
    </>
  );
}
