import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';
import { TrackerError } from '../../core/index';
import { Router } from '@angular/router';

@Component({
  selector: 'b-employee',
  templateUrl: './employee.component.html',
  styles: [`p-dataTable >>> .ui-datatable-footer {
  min-height: 60px;
}`]
})
export class EmployeeComponent implements OnInit {
  employees: IEmployee[] | TrackerError;
  selectedEmployee: IEmployee;
  constructor(private employeeService: EmployeeService, private router: Router) { }
  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employee: IEmployee[]) => {
      this.employees = employee;
    });
  }
  addEmployee() {
    this.router.navigate(['/addEmployee']);
  }
}
