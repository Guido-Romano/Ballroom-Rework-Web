import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html'
})
export class ProductCardComponent implements OnInit, OnDestroy {
  @Input() productos: any[] = [];
  hoveredProduct: any = null;

  private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es'); // Establecer idioma por defecto
  }

  ngOnInit(): void {
    this.loadText(); // Cargar textos iniciales
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadText(); // Volver a cargar textos al cambiar el idioma
    });
  }

  ngOnDestroy(): void {
    this.langChangeSubscription.unsubscribe(); // Liberar suscripción al destruir el componente
  }

  loadText(): void {
    const keysToTranslate = ['WOMANSHOES', 'WOMANVEST', 'MENSHOES', 'MENVEST'];
    this.translate.get(keysToTranslate).subscribe((translations: any) => {
      // Procesar las traducciones según necesidad
      keysToTranslate.forEach(key => {
        translations[key] = this.formatText(translations[key]);
      });

      // Puedes usar las traducciones procesadas donde las necesites
      console.log(translations);
    });
  }

  formatText(text: string): string {
    // Método para formatear el texto según necesidades específicas
    return text.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>');
  }
}
