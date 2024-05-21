import { Component, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productos: any[] = []; 

  constructor(private textService: TextService) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    
    this.productos = this.textService.getProducto();
  }
}


