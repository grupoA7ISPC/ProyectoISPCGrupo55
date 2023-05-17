import { Component } from '@angular/core';
import { Suscripcion } from 'src/app/models/suscripcion';


@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent {
  // Provisorio
  suscripciones: Suscripcion[] = [
    {
      id: 1,
      name: "Suscripcion Básica",
      benefits: [
        "Acceso a funcionalidades básicas de nuestra plataforma"
      ],
      duration: "Membresia Mensual",
      price: 0
    },
    {
      id: 2,
      name: "Premium Mensual",
      benefits: [
        "Acceso completo a nuestra plataforma",
        "Vídeos explicativos de ejercicios con objetivos acordes a tus necesidades",
        "Seguimiento de progreso",
        "Tips de alimentación por nuestros expertos",
        "Descuentos y ofertas especiales en tiendas deportivas"
      ],
      duration: "Membresia Mensual",
      price: 1000
    },
    {
      id: 3,
      name: "Premium Anual",
      benefits: [
        "Acceso completo a nuestra plataforma",
        "Vídeos explicativos de ejercicios con objetivos acordes a tus necesidades",
        "Seguimiento de progreso",
        "Tips de alimentación por nuestros expertos",
        "Descuentos y ofertas especiales en tiendas deportivas"
      ],
      duration: "Membresia Anual",
      price: 8000
    }
  ]
}
