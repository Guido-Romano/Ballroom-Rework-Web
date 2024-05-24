import { Component, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit{
  clases: any[] = [];

  constructor(private textService: TextService) { }

  ngOnInit(): void {
    this.clases = this.textService.getClases();
  }
}
