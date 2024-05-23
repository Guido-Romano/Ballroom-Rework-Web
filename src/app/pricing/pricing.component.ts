import { Component, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  clases: any[] = [];

  constructor(private textService: TextService) { }

  ngOnInit(): void {
    this.clases = this.textService.getClases();
  }
}
