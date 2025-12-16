import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { RoomsService } from '../rooms/services/rooms';

@Component({
  selector: 'hinv-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.scss',
  // providers: [RoomsService],
})
export class Container implements OnInit, AfterContentInit {
  @ContentChild(Employee) employeeComponent!: Employee;

  // constructor(@Host() private roomsService: RoomsService) {}
  constructor() {}

  ngAfterContentInit(): void {
    console.log('aftercontentinit in container');
    console.log(this.employeeComponent.empName);
  }
  ngOnInit(): void {}
}
