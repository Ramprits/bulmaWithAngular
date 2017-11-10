import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'b-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent implements OnInit {
  AddEmployee: FormGroup;
  constructor(private fb: FormBuilder) { }
  employee = Employee;
  ngOnInit() {
    this.AddEmployee = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(200)]]
    });
  }

}
export class Employee {
  constructor(public firstName?: '',
    public lastName?: '', public email?: '',
    public mobile?: '', public gender?: '', public address?: '') {
  }
}
