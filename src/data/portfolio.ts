import type { Project } from "../types";
// DEMOSTRACIONES: reemplaza por proyectos reales, sus imágenes y URL verificadas.
// Sin url, «Ver proyecto» abre un concepto local explícitamente identificado.
export const portfolio: Project[] = [
  {
    id: "boda",
    name: "Una historia para celebrar",
    category: "Invitaciones",
    description:
      "Concepto de invitación de boda con itinerario, galería y confirmación de asistencia.",
    technologies: ["Diseño responsive", "Animaciones", "WhatsApp"],
    image: "/images/wedding.jpg",
  },
  {
    id: "studio",
    name: "Una presencia que conecta",
    category: "Páginas web",
    description:
      "Concepto de sitio corporativo para presentar servicios y generar oportunidades de contacto.",
    technologies: ["React", "TypeScript", "Vite"],
    image: "/images/devices.png",
  },
  {
    id: "control",
    name: "Tu negocio, en perspectiva",
    category: "Sistemas",
    description:
      "Concepto de dashboard para consultar inventario, ventas y reportes en un mismo espacio.",
    technologies: ["React", "C#", ".NET"],
    image: "/images/devices.png",
  },
  {
    id: "catalogo",
    name: "Cada producto, su espacio",
    category: "Catálogos",
    description:
      "Concepto de catálogo con categorías, información de productos y solicitudes por WhatsApp.",
    technologies: ["React", "Responsive", "QR"],
    image: "/images/devices.png",
  },
  {
    id: "toque",
    name: "Conexiones a un toque",
    category: "NFC",
    description:
      "Concepto de llavero NFC enlazado a una tarjeta digital personalizada.",
    technologies: ["NFC", "QR", "Impresión 3D"],
    image: "/images/devices.png",
  },
  {
    id: "movil",
    name: "Tu operación en movimiento",
    category: "Aplicaciones",
    description:
      "Concepto de aplicación empresarial con interfaz móvil para tareas y seguimiento.",
    technologies: ["Multiplataforma", "APIs", "TypeScript"],
    image: "/images/devices.png",
  },
];
