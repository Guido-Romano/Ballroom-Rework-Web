import { Injectable } from '@angular/core';
import { TextConfig } from '../config/text-config';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  constructor() { }

  getArticles() {
    return TextConfig.articles;
  }

  getArticleById(id: number) {
    return TextConfig.articles.find(article => article.id === id);
  }
}
