import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'b-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {
    const CustomerId = this.route.snapshot.params['CustomerId'];
    this.getCustomer(CustomerId);
  }
  getCustomer(CustomerId) {
    this.customerService.getCustomer(CustomerId)
      .subscribe((customer: Customer) => { this.customer = customer; },
      (err) => { console.error(err); },
      () => { console.log('Sucessfully loaded !!'); });
  }
}
