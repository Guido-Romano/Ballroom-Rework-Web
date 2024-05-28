import { Component, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-banner-class',
  templateUrl: './banner-class.component.html'
})
export class BannerClassComponent implements OnInit{
  clases: any[] = [];
  preguntas: any[] = [];

  constructor(private textService: TextService) { }

  ngOnInit(): void {
    this.clases = this.textService.getClases();
    this.preguntas = this.textService.getPreguntas();
  }
}
