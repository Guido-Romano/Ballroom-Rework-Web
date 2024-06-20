import { Component, OnInit } from '@angular/core';
import productData from '../../../assets/i18n/es.json';

@Component({
  selector: 'app-apparel',
  templateUrl: './apparel.component.html'
})
export class ApparelComponent implements OnInit {
  womenShoes: any[] = [];
  womenDresses: any[] = [];
  menShoes: any[] = [];
  menOutfits: any[] = [];

  ngOnInit(): void {
    this.womenShoes = productData.WOMANSHOES;
    this.womenDresses = productData.WOMANVEST;
    this.menShoes = productData.MENSHOES;
    this.menOutfits = productData.MENVEST;
  }
}





