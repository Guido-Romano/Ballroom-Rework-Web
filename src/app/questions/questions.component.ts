import { Component, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  articles: any[] = [];

  constructor(private textService: TextService) { }

  ngOnInit(): void {
    // Obtener todos los artículos
    this.articles = this.textService.getArticles();

    // Filtrar los artículos cuyo id esté en el rango del 9 al 15
    this.articles = this.articles.filter(article => article.id >= 6 && article.id <= 15);
  }
}



