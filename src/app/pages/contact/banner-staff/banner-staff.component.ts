import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-banner-staff',
  templateUrl: './banner-staff.component.html'
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
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log('Language changed to:', event.lang);
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
      console.log('Staff data:', data); // Depuración
      this.staff = data;
    });

    this.translate.get('TEXTS.14').subscribe((data: any) => {
      console.log('Question data:', data); // Depuración
      this.question = data; 
    });

    this.translate.get('NAV').subscribe((data: any) => {
      console.log('Contact data:', data); // Depuración
      this.contact = data.contact; 
    });
  }

}
