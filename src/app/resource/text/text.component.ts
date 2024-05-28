import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html'
})
export class TextComponent implements OnInit, OnDestroy {
  @Input() articleId: number | null = null;  // Añadir Input para especificar el ID del artículo
  articles: any[] = []; 
  article: any | null = null;  // Variable para almacenar el artículo específico
  private langChangeSubscription: Subscription | undefined;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    this.loadText();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadText();
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  loadText(): void {
    this.translate.get('TEXTS').subscribe((data: any) => {
      this.articles = data.map((article: any) => ({ ...article, showMore: false }));
      this.findArticleById();
    });
  }

  toggleText(): void {
    if (this.article) {
      this.article.showMore = !this.article.showMore;
    }
  }

  findArticleById(): void {
    if (this.articleId !== null) {
      this.article = this.articles.find(article => article.id === this.articleId) || null;
    }
  }
}

