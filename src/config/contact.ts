// Escribe el número internacional, solo dígitos (código de país + número).
export const contact = { whatsapp: '', defaultMessage: 'Hola RCM CodeDev, quiero información sobre sus servicios.' };
export function whatsappUrl(message = contact.defaultMessage) {
  return contact.whatsapp ? `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}` : null;
}
