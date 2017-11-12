import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/components/common/api';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { LoggerService } from '../../../core/Logger.Service';
import { IEmployee } from '../employee';
import { DepartmentService } from '../../../core/department.service';
import { TrackerError } from '../../../core/TrackerError';

@Component({
  selector: 'b-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent implements OnInit {
  errorMessage: any;
  loading: boolean;
  addEmployee: FormGroup;
  genders: SelectItem[];
  departments: SelectItem[] | TrackerError;
  department: any;

  constructor(private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private logger: LoggerService, private departmentService: DepartmentService) { }
  employee: Employee = {
    firstName: '',
    lastName: '', email: '',
    mobile: '', gender: '', address: '', departmentGuid: ''
  };
  ngOnInit() {
    this.getDepartments();
    this.addEmployee = this.fb.group({
      firstName: [this.employee.firstName, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      lastName: [this.employee.lastName, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [this.employee.email, [Validators.required]],
      mobile: [this.employee.mobile, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      gender: [this.employee.gender, [Validators.required]],
      departmentGuid: [this.employee.departmentGuid, [Validators.required]],
      address: [this.employee.address, [Validators.required, Validators.minLength(20), Validators.maxLength(200)]]
    });
    this.genders = [];
    this.genders.push({ label: 'Select Gender', value: '' });
    this.genders.push({ label: 'Male', value: 'Male' });
    this.genders.push({ label: 'Female', value: 'Female' });
  }
  getDepartments() {
    this.departmentService.getDepartments().subscribe((department: any[]) => {
      this.departments = department;
    }, (error: any) => { this.errorMessage = error; },
      () => { this.loading = false; });
  }
  onSubmit(form) {
    this.employeeService.insertEmployee(form)
      .subscribe((employee: IEmployee) => {
        this.router.navigate(['/employees']);
      }, (err: any) => {
        this.logger.error('There are some problem');
      });
  }
}
export class Employee {
  public firstName?: '';
  public lastName?: '';
  public email?: '';
  public mobile?: '';
  public gender?: '';
  public address?: '';
  public departmentGuid?: '';
}
