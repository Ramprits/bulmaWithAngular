import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee, Employee } from './employee';
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
  employee: Employee = new PrimeEmployee();

  constructor(private employeeService: EmployeeService, private router: Router) { }
  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employee: IEmployee[]) => {
      this.employees = employee;
    });
  }
  cloneCar(c: Employee): Employee {
    const employee = new PrimeEmployee();
    // tslint:disable-next-line:forin
    for (const prop in c) {
      employee[prop] = c[prop];
    }
    return employee;
  }
  onRowSelect(event) {
    this.employee = this.cloneCar(event.data);
    console.log(this.employee);
  }
  addEmployee() {
    this.router.navigate(['/addEmployee']);
  }
}
class PrimeEmployee implements Employee {
  constructor(public firstName?, public lastName?, public email?, public mobile?, public gender?, public address?,
  ) { }
}
