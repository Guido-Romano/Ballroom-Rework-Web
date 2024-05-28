import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-banner-class',
  templateUrl: './banner-class.component.html'
})
export class BannerClassComponent implements OnInit, OnDestroy {
  when: any; 
  free: any; 
  level: any; 

  classes: any[] = [];
  promo: any; 

 
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
  

    this.translate.get('QUESTIONS.2').subscribe((data: any) => {
      this.when = data; 
    });

    this.translate.get('QUESTIONS.6').subscribe((data: any) => {
      this.level = data; 
    });

    this.translate.get('CLASSES').subscribe((data: any[]) => {
      this.classes = data;
    });

    this.translate.get('QUESTIONS.1').subscribe((data: any) => {
      this.free = data; 
    });
 
    this.translate.get('PROMOTION.1').subscribe((data: any) => {
      this.promo = data; 
    });
  }
}