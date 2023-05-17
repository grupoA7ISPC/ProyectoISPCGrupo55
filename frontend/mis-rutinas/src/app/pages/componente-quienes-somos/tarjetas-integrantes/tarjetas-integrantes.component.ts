import { Component } from '@angular/core';
import { Integrante } from 'src/app/models/integrante';

@Component({
  selector: 'app-tarjetas-integrantes',
  templateUrl: './tarjetas-integrantes.component.html',
  styleUrls: ['./tarjetas-integrantes.component.css']
})
export class TarjetasIntegrantesComponent {
  constructor() { }

  listaIntegrantes: Integrante[] = [
    {
      id: 1,
      nombre:'Facundo Peralta',
      rol: 'Desarrollador',
      foto: 'facu.jpg',
      github: 'facuezeperalta',
      linkedin: 'facundo-peralta-702306a2',
      info: ''
    },
    {
      id: 2,
      nombre: 'Andres Luna',
      foto: 'andres.jpg',
      rol: 'Desarrollador',
      github: 'andresito-luna',
      linkedin: 'andres-luna-arg',
      info: ''
    },
    {
      id: 3,
      nombre:'Carina Payleman',
      rol: 'Desarrollador',
      foto: 'carina.jpg',
      github: 'PaylemanC',
      linkedin: 'carina-rocio-payleman-6a12b124b',
      info: ''
    },
    {
      id: 4,
      nombre:'Esteban Martins',
      rol: 'Desarrollador',
      foto: 'esteban.jpg',
      github: 'estebanmartins',
      linkedin: '',
      info: ''
    },
    {
      id: 5,
      nombre:'Horacio Quiroga',
      rol: 'Desarrollador',
      foto: 'horacio.jpg',
      github: 'horacioequiroga',
      linkedin: '',
      info: ''
    },
    {
      id: 6,
      nombre:'Federico Ocaranza',
      rol: 'Desarrollador',
      foto: 'fede.jpg',
      github: 'fede9087',
      linkedin: '',
      info: ''
    },
    {
      id: 7,
      nombre:'Guillermo Arias',
      rol: 'Desarrollador',
      foto: 'guille.jpg',
      github: 'misterio07',
      linkedin: '',
      info: ''
    },
    {
      id: 8,
      nombre:'Veronica Torres',
      rol: 'Desarrollador',
      foto: 'vero.jpg',
      github: 'verofx',
      linkedin: '',
      info: ''
    },
  ];

}
