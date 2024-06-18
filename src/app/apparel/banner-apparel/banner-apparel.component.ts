import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-banner-apparel',
  templateUrl: './banner-apparel.component.html',
})
export class BannerApparelComponent implements OnInit {
  @Input() mostrar: number = 0; // Inicializa la propiedad mostrar
  title: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTitles().subscribe(data => {
      this.title = data.TITLES.find((title: any) => title.id === this.mostrar); // Especificar el tipo de title
    });
  }
}



