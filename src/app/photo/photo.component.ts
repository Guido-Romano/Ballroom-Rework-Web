import { Component, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  clases: any[] = [];

  constructor(private textService: TextService) { }

  ngOnInit(): void {
    this.clases = this.textService.getClases();
  }
}
