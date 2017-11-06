import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerNewService } from './customer-new.service';
import { Title } from '@angular/platform-browser';
import { LoggerService } from '../../core/Logger.Service';

@Component({
  selector: 'b-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomerNewService, private title: Title, private logger: LoggerService) {
    this.title.setTitle('Customer List');
  }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe((customers: Customer[]) => { this.customers = customers; },
      (err) => console.error(this.logger.error('unable to fetch !'), err),
      () => { this.logger.log('sucessfully !'); });
  }

}
