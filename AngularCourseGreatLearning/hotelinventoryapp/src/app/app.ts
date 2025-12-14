import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  signal,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CommonModule } from '@angular/common';
import { Container } from './container/container';
import { Employee } from './employee/employee';
registerLocaleData(localeFr);

@Component({
  selector: 'hinv-root',
  imports: [RouterOutlet, RoomsComponent, CommonModule, Container, Employee],
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
export class App implements OnInit {
  protected readonly title = signal('hotelinventoryapp');

  role = 'Admin';

  //   @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  //   ngAfterViewInit(): void {
  //     const componentRef = this.vcr.createComponent(RoomsComponent);
  //     componentRef.instance.numberOfRooms = 20;
  //   }
  // }

  @ViewChild('name', { static: true }) name!: ElementRef;
  ngOnInit(): void {
    // this.name.nativeElement.innerText = 'what ya got bruh!!';
    // console.log(this.name.nativeElement.innerText);
  }
}
