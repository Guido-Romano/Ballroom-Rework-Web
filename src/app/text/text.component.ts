import { Component } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  articleHeading = 'Titulo principal';
  articleIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ipsum vel nunc commodo hendrerit sit amet vel nisi. Donec sodales maximus justo, nec dictum lectus malesuada non. Sed auctor ultrices tellus non varius.';
  articleMoreText = 'Sed eu enim malesuada, fermentum mi eu, finibus velit. Nam quis blandit velit, vel vehicula neque. Etiam eu lorem suscipit, sollicitudin ante at, pharetra quam.';
  showMore = false;

  toggleText() {
    this.showMore = !this.showMore;
}
}