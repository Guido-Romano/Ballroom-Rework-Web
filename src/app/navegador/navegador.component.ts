import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {

  constructor() { }

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

}
