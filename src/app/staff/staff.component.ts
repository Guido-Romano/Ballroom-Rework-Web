import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html'
})
export class StaffComponent implements OnInit {
  staffList: any[] = [];

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    this.loadStaff();
  }

  loadStaff(): void {
    this.translate.get('STAFF').subscribe((data: any) => {
      this.staffList = data;
    });
  }

  isActive(url: string): boolean {
    return this.router.isActive(url, true);
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
import { TextService } from '../services/text.service';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html'
})
export class StaffComponent implements OnInit {
  personals: any[] = [];

  constructor(private textService: TextService) { }

  ngOnInit(): void {
    this.personals = this.textService.getPersonal();
  }
}
*/

