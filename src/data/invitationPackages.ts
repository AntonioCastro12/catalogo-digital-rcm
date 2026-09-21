import type { InvitationPackage } from "../types";

// Fuente: Paquetes_Invitaciones_Digitales_RCM_Code_Dev_250_a_5000.pdf.
// Precios en MXN. Cada nivel incluye el anterior según el detalle del PDF.
export const invitationPackages: InvitationPackage[] = [
  {
    name: "Esencial",
    price: 250,
    features: [
      "Invitación digital de una sola página",
      "Nombres y fecha",
      "Fotografía principal",
      "Fecha, hora y lugar",
      "Botón de Google Maps",
      "Botón de WhatsApp",
      "Diseño responsive para celular",
    ],
    recommendedFor:
      "Eventos pequeños o clientes que buscan una opción económica.",
  },
  {
    name: "Clásica",
    price: 500,
    features: [
      "Todo lo del paquete Esencial",
      "Portada con botón Abrir invitación",
      "Música de fondo",
      "Cuenta regresiva",
      "Galería de hasta 5 fotografías",
      "Código de vestimenta",
      "Mensaje final personalizado",
    ],
    recommendedFor: "Una invitación emotiva con las funciones más solicitadas.",
  },
  {
    name: "Elegante",
    price: 900,
    features: [
      "Todo lo del paquete Clásica",
      "Animaciones suaves",
      "Galería premium",
      "Itinerario",
      "Google Maps + Waze",
      "Mesa de regalos",
      "Botón Agregar al calendario",
      "Confirmación por WhatsApp",
    ],
    recommendedFor:
      "Bodas, XV años y eventos que buscan una experiencia visual completa.",
  },
  {
    name: "Premium",
    price: 1500,
    features: [
      "Todo lo del paquete Elegante",
      "RSVP mediante formulario",
      "Video dentro de la invitación",
      "Pase personalizado con nombre/familia",
      "Número de lugares asignados",
      "Mayor personalización visual",
      "Secciones adicionales según el evento",
    ],
    recommendedFor:
      "Clientes que desean personalización y mejor control de confirmaciones.",
  },
  {
    name: "Premium Plus",
    price: 2500,
    features: [
      "Todo lo del paquete Premium",
      "URL o código personalizado por invitado/familia",
      "Base de datos de invitados",
      "Estados: confirmado, pendiente y no asistirá",
      "Conteo de pases y asistentes",
      "Panel básico de confirmaciones",
      "QR individual por invitado o familia",
    ],
    recommendedFor:
      "Eventos medianos que requieren organizar invitados y pases.",
  },
  {
    name: "VIP",
    price: 5000,
    featured: true,
    features: [
      "Todo lo del paquete Premium Plus",
      "Panel administrativo completo",
      "RSVP conectado a la base de datos",
      "QR único con validación",
      "Escáner de QR desde celular",
      "Control de acceso al evento",
      "Registro de hora de entrada",
      "Control de pases utilizados",
      "Prevención de QR duplicados",
      "Estadísticas de confirmados, pendientes y accesos",
      "Álbum colaborativo mediante QR o enlace",
      "Experiencia y diseño VIP personalizados",
    ],
    recommendedFor:
      "La solución completa: invitación + gestión de invitados + validación y control de acceso.",
  },
];

export const invitationExtras = [
  "Dominio personalizado.",
  "Hosting o infraestructura especial.",
  "Almacenamiento adicional para fotografías y videos.",
  "Carga masiva o administración especial de listas de invitados.",
  "Personal para operar el acceso durante el evento.",
  "Cambios o funciones especiales fuera del alcance del paquete.",
];
