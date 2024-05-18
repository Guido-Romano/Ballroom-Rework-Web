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
    this.articles = this.textService.getArticles();
  }
}


