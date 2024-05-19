import { Component, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  articles: any[] = [];

  constructor(private textService: TextService) { }

  ngOnInit(): void {
 
    this.articles = this.textService.getArticles();

    const allowedIds = [99, 98, 97, 96, 95, 94];
    this.articles = this.articles.filter(article => allowedIds.includes(article.id));
  }
}

