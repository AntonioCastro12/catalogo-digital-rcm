export type Category =
  | "Desarrollo"
  | "Invitaciones"
  | "Soluciones digitales"
  | "NFC / QR";
export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  category: Category;
  icon: string;
}
export interface InvitationPackage {
  name: string;
  price: number | null;
  features: string[];
  featured?: boolean;
  recommendedFor?: string;
}
export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  url?: string;
}
