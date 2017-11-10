import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';
import { TrackerError } from '../../core/index';

@Component({
  selector: 'b-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
  employees: IEmployee[] | TrackerError;
  selectedEmployee: IEmployee;
  constructor(private employeeService: EmployeeService) { }
  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employee: IEmployee[]) => {
      this.employees = employee;
    });
  }

}
