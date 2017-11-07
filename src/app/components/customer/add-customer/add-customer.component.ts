import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerNewService } from '../customer-new.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoggerService } from '../../../core/Logger.Service';

@Component({
  selector: 'b-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  addCustomer: FormGroup;
  updateHeading = 'Add new customer';
  constructor(private fb: FormBuilder,
    private customerService: CustomerNewService,
    private router: Router,
    private title: Title,
    private logger: LoggerService) {
    this.title.setTitle('Add Customer');
  }
  customer: Customer = {
    companyName: '',
    contactName: '',
    contactTitle: '',
    address: '',
    isActive: true
  };
  ngOnInit() {
    this.addCustomer = this.fb.group({
      companyName: [this.customer.companyName, { updateOn: 'blur', validators: [Validators.required] }],
      contactName: [this.customer.contactName, { updateOn: 'blur', validators: [Validators.required] }],
      contactTitle: [this.customer.contactTitle, { updateOn: 'blur', validators: [Validators.required] }],
      address: [this.customer.address, { updateOn: 'blur', validators: [Validators.required] }],
      isActive: this.customer.isActive
    });
  }
  onSubmit(customer: Customer) {
    this.customerService.addCustomer(customer)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe((customer: Customer) => {
        this.router.navigate(['/customers']);
      }, (err: any) => {
        this.logger.error('There are some problem');
      });
  }
  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/customers']);
  }
}
