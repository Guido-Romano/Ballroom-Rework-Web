import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  clases: any[] = [
    {
      titulo: 'Sábados, entrenamiento. (Nivel: competitivo)',
      descripcion: 'Clases Grupales de Ballroom Dance (International Style)',
      horario: ' Horarios: 09:00 Hs - 10:00 Hs / 19:00 Hs - 20:00 Hs',
      imagen: '../../assets/img14.jpeg'
    },
   
    {
      titulo: '¡Sábados! (Nivel: principiante/intermedio)',
      descripcion: '¡Ven y aprende los pasos de baile más populares!',
      horario: 'Horario: 17:30 Hs a 18:30 Hs',
      imagen: '../../assets/img12.jpeg'
    },

    {
      titulo: '¡Domingos! (Nivel: principiante/intermedio)',
      descripcion: '¡Disfruta de una noche llena de ritmo y diversión!',
      horario: 'Horario: 19:00 Hs - 20:00 Hs',
      imagen: '../../assets/img13.jpeg'
    }
  ];
}
