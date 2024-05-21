import { Component, Input, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() claseId!: number;
  clase: any;

  constructor(private textService: TextService) { }

  ngOnInit() {
    this.clase = this.textService.getClasesById(this.claseId);
  }
}

