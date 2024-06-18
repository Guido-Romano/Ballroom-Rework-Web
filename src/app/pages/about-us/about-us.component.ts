import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',

})
export class AboutUsComponent implements OnInit {
  titles: any[] = [];
  selectedTitle: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTitles().subscribe(data => {
      this.titles = data.TITLES;
      this.selectedTitle = this.titles.find(title => title.id === 5); // Obtiene el título con id 5
    });
  }
}

