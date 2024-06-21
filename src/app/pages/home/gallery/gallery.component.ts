import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  openWhatsApp() {
    window.open('https://wa.me/541159157116', '_blank');
  }
}
