import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-banner-about',
  templateUrl: './banner-about.component.html'
})
export class BannerAboutComponent implements OnInit, OnDestroy {
  text: any = {};
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
    this.translate.get('TEXTS.1').subscribe((data: any) => {
      data.info = this.formatText(data.info);
      data.info2 = this.formatText(data.info2);
      this.text = data;
    });
  }

  formatText(text: string): string {
    return text.replace(/\n\n\n/g, '</p><p>').replace(/\n/g, '<br/>');
  }
  
}


