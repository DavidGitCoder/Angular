import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';

@Component({
  selector: 'hinv-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container implements OnInit, AfterContentInit {
  @ContentChild(Employee) employeeComponent!: Employee;

  ngAfterContentInit(): void {
    console.log('aftercontentinit in container');
    console.log(this.employeeComponent.empName);
  }
  ngOnInit(): void {}
}
