import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';

@Component({
  selector: 'b-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe((customers: Customer[]) => { this.customers = customers; },
      (err) => console.error('There are error when feching customer data', err),
      () => { console.log('Sucessfully loaded !'); });
  }

}
