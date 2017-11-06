import { Component, OnInit } from '@angular/core';
import { CustomerNewService } from '../customer-new.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { Subscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'b-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customer: any;
  private sub: Subscription;
  constructor(private route: ActivatedRoute,
    private customerService: CustomerNewService,
    private title: Title) {
    this.title.setTitle('Customer Detail');
  }
  ngOnInit() {
    this.customerService.getCustomer(this.route.snapshot.params['customerId'])
      .subscribe(customer => { this.customer = customer; });
  }

}
