import { Routes } from '@angular/router';
import { Employee } from './employee/employee';
import { RoomsComponent } from './rooms/rooms';

export const routes: Routes = [
  {
    path: 'employee',
    component: Employee,
  },
  { path: 'rooms', component: RoomsComponent },
  {
    path: '',
    redirectTo: '/rooms',
    pathMatch: 'full',
  },
];
