// ejemplo en un componente
import { Component, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  clases: any[];

  constructor(private textService: TextService) {}

  ngOnInit() {
    this.textService.getClases().subscribe(clases => {
      this.clases = clases;
    });
  }
}












/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent {

}

*/



