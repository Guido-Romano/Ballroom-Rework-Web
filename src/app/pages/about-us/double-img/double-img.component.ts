import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-double-img',
  templateUrl: './double-img.component.html'
})
export class DoubleImgComponent implements OnInit, OnDestroy {
  firsttext: any;
  secondtext: any; 
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
    this.translate.get('TEXTS').subscribe((data: any[]) => {
      this.firsttext = data.find(item => item.id === 1);
      this.secondtext = data.find(item => item.id === 5);
    });
  }

  formatText(text: string): string {
    return text ? text.replace(/\n\n\n/g, '</p><p>').replace(/\n/g, '<br/>') : '';
  }
}
