import { AfterContentInit, Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms';

@Component({
  selector: 'hinv-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
  // providers: [RoomsService],
})
export class Employee implements AfterContentInit, OnInit {
  constructor(private roomsService: RoomsService) {}
  ngOnInit(): void {}
  empName: string = 'John';

  ngAfterContentInit(): void {
    console.log('aftercontentinit in employee');
  }
}
