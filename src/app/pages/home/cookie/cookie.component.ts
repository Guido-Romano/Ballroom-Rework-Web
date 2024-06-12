import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html'
})
export class CookieComponent {
  isVisible: boolean = true;



  accept(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.isVisible = false;
  }

  reject(): void {
    localStorage.setItem('cookiesAccepted', 'false');
    this.isVisible = false;
  }
}



