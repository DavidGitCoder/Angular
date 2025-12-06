import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';

@Component({
  selector: 'hinv-root',
  imports: [RouterOutlet, Rooms],
  // template: `<h1>Hello World from Inline Template</h1>
  //   <p>Angular is awesome</p>`,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class App {
  protected readonly title = signal('hotelinventoryapp');
}
