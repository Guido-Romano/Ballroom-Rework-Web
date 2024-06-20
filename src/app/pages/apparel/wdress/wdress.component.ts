import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wdress',
  templateUrl: './wdress.component.html',
})
export class WdressComponent implements OnInit, OnDestroy {
  promotions: any[] = [];
  hoveredProduct: any;
  private langChangeSubscription!: Subscription;

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
    this.translate.get('WOMANVEST').subscribe((data: any[]) => {
      this.promotions = data;
    });
  }
}
