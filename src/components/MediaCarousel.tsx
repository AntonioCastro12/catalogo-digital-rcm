import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { galleryMedia, type GalleryTab } from "../data/gallery";
import "./MediaCarousel.css";

const headings: Record<GalleryTab, [string, string]> = {
  servicios: ["SERVICIOS RCM", "Servicios para tu negocio"],
  invitaciones: ["INVITACIONES", "Bodas, XV años y celebraciones"],
  nfc: ["NFC / QR", "Comparte tu tarjeta digital"],
  desarrollo: ["DESARROLLO", "Páginas web y agendas online"],
  proyectos: ["PROYECTOS", "Catálogos y tarjetas digitales"],
};

export default function MediaCarousel({ tab }: { tab: GalleryTab }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [unavailable, setUnavailable] = useState(false);
  const root = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const touch = useRef<number | null>(null);
  const items = galleryMedia.filter(item => item.tab === tab);
  const item = items[index];
  const active = playing && visible && pageVisible;
  const next = (step: number) => {
    setUnavailable(false);
    setIndex(current => (current + step + items.length) % items.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    if (root.current) observer.observe(root.current);
    const update = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);

  useEffect(() => {
    const element = video.current;
    let cancelled = false;
    if (element) {
      if (active) element.play().catch(() => { if (!cancelled) setUnavailable(true); });
      else element.pause();
    }
    // A failed media request must not stop the automatic sequence.
    if (!active) return () => { cancelled = true; };
    const delay = item.kind === "image" || unavailable ? 5000 : 180000;
    const timer = window.setTimeout(() => {
      setUnavailable(false);
      setIndex(current => (current + 1) % items.length);
    }, delay);
    return () => { cancelled = true; window.clearTimeout(timer); element?.pause(); };
  }, [active, index, item.kind, items.length, unavailable]);

  return <section ref={root} className="media-carousel container" aria-label="Galería de trabajos" aria-roledescription="carrusel">
    <div className="media-intro">
      <span className="eyebrow">{headings[tab][0]}</span>
      <h2>{headings[tab][1]}</h2>
      <h3>{item.title}</h3>
      <p className="media-category">{item.category}</p>
      <div className="media-controls">
        <button type="button" aria-label="Anterior" onClick={() => next(-1)}><ChevronLeft size={20} /></button>
        <span aria-live={playing ? "off" : "polite"}>{index + 1} / {items.length}</span>
        <button type="button" aria-label="Siguiente" onClick={() => next(1)}><ChevronRight size={20} /></button>
        <button type="button" aria-label={playing ? "Pausar carrusel" : "Reanudar carrusel"} onClick={() => setPlaying(value => !value)}>
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
        {item.kind === "video" && <button type="button" aria-label={muted ? "Activar sonido" : "Silenciar"} onClick={() => setMuted(value => !value)}>
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>}
      </div>
    </div>
    <div className="media-display" onTouchStart={event => { touch.current = event.touches[0].clientX; }} onTouchEnd={event => {
      if (touch.current !== null) {
        const distance = event.changedTouches[0].clientX - touch.current;
        if (Math.abs(distance) > 50) next(distance < 0 ? 1 : -1);
      }
      touch.current = null;
    }}>
      {item.kind === "image" ? <img key={item.src} src={item.src} alt={item.title} decoding="async" onError={() => setUnavailable(true)} /> :
        <video ref={video} key={item.src} src={item.src} poster={item.poster} autoPlay={active} muted={muted} playsInline preload="metadata"
          onEnded={() => { if (active) next(1); }} onError={() => setUnavailable(true)} aria-label={item.title} />}
    </div>
  </section>;
}
