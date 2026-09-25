export type GalleryTab = "servicios" | "invitaciones" | "nfc" | "desarrollo" | "proyectos";
export interface GalleryMedia { src: string; kind: "image" | "video"; tab: GalleryTab; title: string; category: string; poster?: string; }
export const galleryMedia: GalleryMedia[] = [
  {
    "src": "/media/foto-11.jpeg",
    "kind": "image",
    "tab": "servicios",
    "title": "Desarrollo web y servicios RCM",
    "category": "Nuestros servicios"
  },
  {
    "src": "/media/video-11.mp4",
    "kind": "video",
    "tab": "servicios",
    "title": "Tarjeta digital para nutriólogos",
    "category": "Tarjetas digitales",
    "poster": "/media/video-11.jpg"
  },
  {
    "src": "/media/foto-12.jpeg",
    "kind": "image",
    "tab": "servicios",
    "title": "Promoción de tarjetas digitales",
    "category": "Tarjetas digitales"
  },
  {
    "src": "/media/foto-15.jpeg",
    "kind": "image",
    "tab": "servicios",
    "title": "Automatiza la atención de tu negocio",
    "category": "Agendas y automatización"
  },
  {
    "src": "/media/foto-03.jpeg",
    "kind": "image",
    "tab": "invitaciones",
    "title": "Bautizo de Valentina",
    "category": "Bautizos"
  },
  {
    "src": "/media/video-01.mp4",
    "kind": "video",
    "tab": "invitaciones",
    "title": "Invitación de bautizo de Valentina",
    "category": "Bautizos",
    "poster": "/media/video-01.jpg"
  },
  {
    "src": "/media/foto-04.jpeg",
    "kind": "image",
    "tab": "invitaciones",
    "title": "XV años de Valentina",
    "category": "XV años"
  },
  {
    "src": "/media/video-02.mp4",
    "kind": "video",
    "tab": "invitaciones",
    "title": "Invitaciones para cada celebración",
    "category": "Eventos especiales",
    "poster": "/media/video-02.jpg"
  },
  {
    "src": "/media/foto-08.jpeg",
    "kind": "image",
    "tab": "invitaciones",
    "title": "Boda de Fernanda y Daniel",
    "category": "Bodas"
  },
  {
    "src": "/media/video-06.mp4",
    "kind": "video",
    "tab": "invitaciones",
    "title": "Invitación de XV años de Valentina",
    "category": "XV años",
    "poster": "/media/video-06.jpg"
  },
  {
    "src": "/media/foto-14.jpeg",
    "kind": "image",
    "tab": "invitaciones",
    "title": "XV años de Camila Fernández",
    "category": "XV años"
  },
  {
    "src": "/media/video-07.mp4",
    "kind": "video",
    "tab": "invitaciones",
    "title": "Invitación digital para bautizo",
    "category": "Bautizos",
    "poster": "/media/video-07.jpg"
  },
  {
    "src": "/media/video-08.mp4",
    "kind": "video",
    "tab": "invitaciones",
    "title": "Invitación de XV años de Camila",
    "category": "XV años",
    "poster": "/media/video-08.jpg"
  },
  {
    "src": "/media/video-09.mp4",
    "kind": "video",
    "tab": "invitaciones",
    "title": "Invitación de fiesta retro en celular",
    "category": "Cumpleaños y fiestas",
    "poster": "/media/video-09.jpg"
  },
  {
    "src": "/media/video-10.mp4",
    "kind": "video",
    "tab": "invitaciones",
    "title": "Invitación digital con estilo retro",
    "category": "Cumpleaños y fiestas",
    "poster": "/media/video-10.jpg"
  },
  {
    "src": "/media/video-13.mp4",
    "kind": "video",
    "tab": "invitaciones",
    "title": "Recorrido por la invitación de boda",
    "category": "Bodas",
    "poster": "/media/video-13.jpg"
  },
  {
    "src": "/media/foto-01.jpeg",
    "kind": "image",
    "tab": "nfc",
    "title": "Tarjeta digital para boutique",
    "category": "Tarjetas digitales"
  },
  {
    "src": "/media/video-12.mp4",
    "kind": "video",
    "tab": "nfc",
    "title": "Tarjeta digital en el celular",
    "category": "Tarjetas digitales",
    "poster": "/media/video-12.jpg"
  },
  {
    "src": "/media/foto-09.jpeg",
    "kind": "image",
    "tab": "nfc",
    "title": "Tarjeta digital para odontólogos",
    "category": "Tarjetas digitales"
  },
  {
    "src": "/media/foto-05.jpeg",
    "kind": "image",
    "tab": "desarrollo",
    "title": "Página web para nutriólogos",
    "category": "Páginas web"
  },
  {
    "src": "/media/foto-06.jpeg",
    "kind": "image",
    "tab": "desarrollo",
    "title": "Página web para barbería",
    "category": "Páginas web"
  },
  {
    "src": "/media/foto-13.jpeg",
    "kind": "image",
    "tab": "desarrollo",
    "title": "Agenda online para tus clientes",
    "category": "Agendas y automatización"
  },
  {
    "src": "/media/foto-16.jpeg",
    "kind": "image",
    "tab": "desarrollo",
    "title": "Sitio premium para nutriólogos",
    "category": "Páginas web"
  },
  {
    "src": "/media/foto-02.jpeg",
    "kind": "image",
    "tab": "proyectos",
    "title": "Catálogo digital premium de ropa",
    "category": "Catálogos digitales"
  },
  {
    "src": "/media/video-03.mp4",
    "kind": "video",
    "tab": "proyectos",
    "title": "Recorrido por la boutique D’tete",
    "category": "Catálogos digitales",
    "poster": "/media/video-03.jpg"
  },
  {
    "src": "/media/foto-07.jpeg",
    "kind": "image",
    "tab": "proyectos",
    "title": "Catálogo digital Luna",
    "category": "Catálogos digitales"
  },
  {
    "src": "/media/video-04.mp4",
    "kind": "video",
    "tab": "proyectos",
    "title": "Tarjeta de presentación para boutique",
    "category": "Tarjetas digitales",
    "poster": "/media/video-04.jpg"
  },
  {
    "src": "/media/foto-10.jpeg",
    "kind": "image",
    "tab": "proyectos",
    "title": "Tarjeta digital para taquerías",
    "category": "Tarjetas digitales"
  },
  {
    "src": "/media/video-05.mp4",
    "kind": "video",
    "tab": "proyectos",
    "title": "Presentación de catálogo digital",
    "category": "Catálogos digitales",
    "poster": "/media/video-05.jpg"
  }
];
