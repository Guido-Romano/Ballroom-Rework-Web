import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-banner-staff',
  templateUrl: './banner-staff.component.html',
  styleUrls: ['./banner-staff.component.css']
})
export class BannerStaffComponent implements OnInit, OnDestroy {
  staff: any[] = [];
  question: any; 
  contact: any; 
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

    this.translate.get('TEXTS.14').subscribe((data: any) => {
      this.question = data; 
    });

    this.translate.get('NAV').subscribe((data: any) => {
      this.contact = data.contact; 
    });
  }
}

