import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerNewService } from './customer-new.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'b-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomerNewService, private title: Title) {
    this.title.setTitle('Customer List');
  }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe((customers: Customer[]) => { this.customers = customers; },
      (err) => console.error('There are error when feching customer data', err),
      () => { console.log('Sucessfully loaded !'); });
  }

}
