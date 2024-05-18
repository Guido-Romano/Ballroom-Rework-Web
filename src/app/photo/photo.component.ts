import { Component, Input, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() articleId!: number;
  article: any;

  constructor(private textService: TextService) { }

  ngOnInit() {
    this.article = this.textService.getArticleById(this.articleId);
  }
}

