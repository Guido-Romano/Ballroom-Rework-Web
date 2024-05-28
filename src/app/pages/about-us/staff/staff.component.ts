import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html'
})
export class StaffComponent implements OnInit, OnDestroy {
  staff: any[] = [];
  question: any; 
  private langChangeSubscription: Subscription | undefined;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    this.loadText();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadText();
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  loadText(): void {
    this.translate.get('STAFF').subscribe((data: any[]) => {
      this.staff = data;
    });

    this.translate.get('QUESTIONS.9').subscribe((data: any) => {
      this.question = data; 
    });
  }
}




















/*
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html'
})
export class StaffComponent implements OnInit {
  personals: any[] = [];

  constructor(private router: Router, private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    // Aquí puedes colocar cualquier lógica de inicialización que necesites
    console.log('StaffComponent initialized');
  }

  isActive(url: string): boolean {
    return this.router.isActive(url, true);
  }
}

*/



















/*
import { Component, OnInit } from '@angular/core';
import { TextService } from '../services/staff.service';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html'
})
export class StaffComponent implements OnInit {
  personals: any[] = [];

  constructor(private staffService: TextService) { }

  ngOnInit(): void {
    this.personals = this.staffService.getPersonal();
  }
}
*/

