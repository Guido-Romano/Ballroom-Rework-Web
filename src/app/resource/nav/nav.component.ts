import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  dropdownOpen = false;
  currentLanguage: string; // No es necesario inicializar aquí

  constructor(private router: Router, private translate: TranslateService) {
    // Obtener el idioma del navegador
    const browserLang = navigator.language.split('-')[0]; // Obtener solo el código de idioma (ej. 'es' de 'es-ES')
    this.currentLanguage = browserLang;

    // Configurar el idioma por defecto y el idioma actual
    translate.setDefaultLang('en');
    translate.use(this.currentLanguage); // Usar el idioma detectado del navegador
  }

  ngOnInit(): void {
    // Código de inicialización
  }

  isActive(url: string): boolean {
    return this.router.isActive(url, true);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang).subscribe(() => {
      this.currentLanguage = lang;
    });
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
