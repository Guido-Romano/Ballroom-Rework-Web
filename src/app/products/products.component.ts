import { Component, OnInit, Input } from '@angular/core';
import { TextService } from '../services/text.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  @Input() productoId!: number;
  productos: any[] = [];

  constructor(private textService: TextService) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productos = this.textService.getProducto();
  }

}

