import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html'
})
export class VerticalCardComponent implements OnInit, OnDestroy {
  classes: any[] = [];
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
    this.translate.get('CLASSES').subscribe((data: any[]) => {
      this.classes = data;
    });

 
  }
}

