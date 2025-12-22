import { Routes } from '@angular/router';
import { Employee } from './employee/employee';
import { RoomsComponent } from './rooms/rooms';
import { Notfound } from './notfound/notfound';
import { RoomsBooking } from './rooms/rooms-booking/rooms-booking';
import { RoomsAdd } from './rooms/rooms-add/rooms-add';
import { Login } from './login/login';

export const routes: Routes = [
  {
    path: 'employee',
    component: Employee,
  },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/add', component: RoomsAdd },
  {
    path: 'rooms/:id',
    component: RoomsBooking,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '', //dafautl redirects to /rooms
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**', //any route that doesn't match the above => 404 page
    component: Notfound,
  },
];
