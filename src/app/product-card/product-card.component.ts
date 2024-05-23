import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component'; // Asegúrate de que esta ruta es correcta

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    // El método ngOnInit() debe estar fuera del constructor
  }

  openModal(producto: any): void {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '80%', // Define el ancho del modal
      data: { producto: producto } // Pasa el producto al modal
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado');
    });
  }
}

