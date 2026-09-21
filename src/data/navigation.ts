export const navigation = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'invitaciones', label: 'Invitaciones' },
  { id: 'soluciones', label: 'Soluciones digitales' },
  { id: 'nfc', label: 'NFC / QR' },
  { id: 'desarrollo', label: 'Desarrollo' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
] as const;
export type TabId = typeof navigation[number]['id'];
export function tabFromHash(): TabId {
  return navigation.find(item => item.id === window.location.hash.slice(1))?.id ?? 'inicio';
}
