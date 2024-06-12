import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html'
})
export class ProductCardComponent {
  @Input() productos: any[] = [];
  hoveredProduct: any = null;
}

