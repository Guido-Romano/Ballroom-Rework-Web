import { Component, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  articles: any[] = [];

  constructor(private textService: TextService) { }

  ngOnInit(): void {
 
    this.articles = this.textService.getPersonal();
  }
}

