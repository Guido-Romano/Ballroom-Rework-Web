import { Component, Input, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  @Input() claseId!: number;
  clase: any;

  constructor(private textService: TextService) { }

  ngOnInit() {
    this.clase = this.textService.getClasesById(this.claseId);
  }
}
