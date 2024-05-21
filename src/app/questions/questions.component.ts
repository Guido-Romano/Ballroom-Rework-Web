import { Component, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  preguntas: any[] = [];

  constructor(private textService: TextService) { }

  ngOnInit(): void {
    // Obtener todos los artículos
    this.preguntas = this.textService.getPreguntas();
  }
}



