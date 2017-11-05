import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Customer } from './customer';

@Injectable()
export class CustomerNewService {
  _baseUrl = 'https://localhost:44366/api/customers';
  constructor(private http: Http) { }
  getCustomers(): Observable<Customer[]> {
    return this.http.get(this._baseUrl)
      .map((response: Response) => response.json());
  }

  getCustomer(customerId: any): Observable<Customer> {
    const url = `${this._baseUrl}/${customerId}`;
    return this.http.get(url)
      .map((response: Response) => response.json());
  }
}