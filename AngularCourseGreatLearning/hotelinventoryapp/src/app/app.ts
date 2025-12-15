import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Optional,
  signal,
  ViewChild,
  ViewContainerRef,
  Inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CommonModule } from '@angular/common';
import { Container } from './container/container';
import { Employee } from './employee/employee';
import { Logger } from './logger';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { localStorageToken } from './localstorage.token';
import { sessionStorageToken } from './sessionstorage.token';
import { provideHttpClient, withFetch } from '@angular/common/http';
registerLocaleData(localeFr);

@Component({
  selector: 'hinv-root',
  imports: [RouterOutlet, RoomsComponent, CommonModule, Container, Employee],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
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

  constructor(
    @Optional() private loggerService: Logger,
    @Inject(localStorageToken) private localStorage: Storage,
    @Inject(sessionStorageToken) private sessionStorage: Storage
  ) {}

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()'); // ? is the ternary operator, in case the service is not available
    this.sessionStorage.setItem('age', '28');
    console.log(this.sessionStorage);

    // this.name.nativeElement.innerText = 'what ya got bruh!!';
    // console.log(this.name.nativeElement.innerText);
  }
}
