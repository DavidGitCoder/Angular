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
  inject,
} from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
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
import { InitService } from './init.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppNavComponent } from './app-nav/app-nav.component';
registerLocaleData(localeFr);

@Component({
  selector: 'hinv-root',
  imports: [
    RouterOutlet,
    RouterLinkWithHref,
    RoomsComponent,
    CommonModule,
    Container,
    Employee,
    RouterLinkWithHref,
    MatSlideToggleModule,
    AppNavComponent,
  ],
  providers: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private initService = inject(InitService);

  protected readonly title = signal('hotelinventoryapp');

  role = 'Admin';
  hotelName = 'Hotel California';
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
  ) {
    console.log(this.initService.config);
  }

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()'); // ? is the ternary operator, in case the service is not available
    this.sessionStorage.setItem('age', '28');
    console.log(this.sessionStorage);

    // this.name.nativeElement.innerText = 'what ya got bruh!!';
    // console.log(this.name.nativeElement.innerText);
  }
}
