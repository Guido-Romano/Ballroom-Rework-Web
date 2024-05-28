import { Component, OnInit } from '@angular/core';
import { TextService } from '../../../services/text.service';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html'
})
export class VerticalCardComponent implements OnInit {
  clases: any[] = [];

  constructor(private textService: TextService) { }

  ngOnInit(): void {
    this.clases = this.textService.getClases();
  }
}
