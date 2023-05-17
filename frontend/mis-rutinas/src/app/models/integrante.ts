export interface Integrante {
  id: number,
  foto: string;
  nombre: string;
  rol: 'Desarrollador' | 'Desarrolladora';
  github: string;
  linkedin: string;
  info: string;
}
