import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  miembrosEquipo: MiembroEquipo[] = [
    {
      nombre: 'Cecilia Bulgarelli',
      rol: 'Com. Manager',
      descripcion: 'Administro nuestras redes y aporto ideas creativas tanto en diseño como para el modelo de nuestro negocio.'
    },
    {
      nombre: 'Juan Manuel Almirón',
      rol: 'CEO',
      descripcion: 'Creador de BASC Argentina. Comparto mi gran pasión por el baile con aquellas personas que tenga ganas de aprender.'
    },
    {
      nombre: 'Guido Romano',
      rol: 'Desarrollador',
      descripcion: 'Trabajo en Marketing digital y en aplicaciones para lograr un contacto más eficiente de nuestra comunidad.'
    }
  ];
}

export interface MiembroEquipo {
  nombre: string;
  rol: string;
  descripcion: string;
}
