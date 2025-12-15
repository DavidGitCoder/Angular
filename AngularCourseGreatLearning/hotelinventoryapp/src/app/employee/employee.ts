import { AfterContentInit, Component, OnInit, Self, SkipSelf } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms';

@Component({
  selector: 'hinv-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
  // providers: [RoomsService], --> use resolution modifier: @Self
})
export class Employee implements AfterContentInit, OnInit {
  constructor(@SkipSelf() private roomsService: RoomsService) {}
  ngOnInit(): void {}
  empName: string = 'John';

  ngAfterContentInit(): void {
    console.log('aftercontentinit in employee');
  }
}
