import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  template: `
    <button>{{value}}</button>
  `,
  styles: `button { width: 100%; height: 100%; font-size: 5em; }`
})
export class SquareComponent {
  @Input()
  value?: 'X' | 'O';
}
