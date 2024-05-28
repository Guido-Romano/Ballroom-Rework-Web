import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navegador',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  dropdownOpen = false;

  constructor(private router: Router, private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    const collapseButton = document.querySelector('[data-collapse-toggle="navbar-default"]') as HTMLButtonElement;
    const collapseTarget = document.getElementById('navbar-default') as HTMLElement;

    if (collapseButton && collapseTarget) {
      collapseButton.addEventListener('click', () => {
        if (collapseTarget.classList.contains('hidden')) {
          collapseTarget.classList.remove('hidden');
        } else {
          collapseTarget.classList.add('hidden');
        }
      });
    }
  }

  isActive(url: string): boolean {
    return this.router.isActive(url, true);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.dropdownOpen = false; // Cierra el dropdown después de seleccionar un idioma
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}


