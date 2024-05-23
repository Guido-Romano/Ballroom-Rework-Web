import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TextService } from '../services/text.service';
import { ProductDetailsComponent } from '../product-details/product-details.component'; // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() productoId!: number;
  productos: any[] = [];

  constructor(private textService: TextService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productos = this.textService.getProducto();
  }

  openModal(producto: any): void {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '80%',
      data: { producto: producto }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado');
    });
  }
}

