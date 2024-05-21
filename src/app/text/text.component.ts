import { Component, Input, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() articleId!: number;
  article: any;

  constructor(private textService: TextService) { }

  ngOnInit() {
    this.article = this.textService.getInfoById(this.articleId);
  }

  toggleText() {
    this.article.showMore = !this.article.showMore;
  }
}
