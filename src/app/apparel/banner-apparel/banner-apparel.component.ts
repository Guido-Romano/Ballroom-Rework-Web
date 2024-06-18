import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './../../services/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-banner-apparel',
  templateUrl: './banner-apparel.component.html',
})
export class BannerApparelComponent implements OnInit, OnDestroy {
  @Input() mostrar: number = 0; // Inicializa la propiedad mostrar
  title: any;

  private langChangeSubscription: Subscription | undefined;

  constructor(
    private translate: TranslateService,
    private dataService: DataService
  ) {
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    this.loadText();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadText();
    });

    this.dataService.getTitles().subscribe(data => {
      this.title = data.TITLES.find((title: any) => title.id === this.mostrar); // Especificar el tipo de title
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  private loadText(): void {
    // Implementa el método loadText aquí
  }
}


