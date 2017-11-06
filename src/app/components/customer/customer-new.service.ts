import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Customer } from './customer';

@Injectable()
export class CustomerNewService {
  _baseUrl = 'assets/data/customers.json';
  constructor(private http: Http) { }
  getCustomers(): Observable<Customer[]> {
    return this.http.get(this._baseUrl)
      .map((response: Response) => response.json());
  }

  getCustomer(customerId: Customer): Observable<Customer> {
    const url = `${this._baseUrl}/${customerId}`;
    return this.http.get(url)
      .map((response: Response) => response.json());
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post(this._baseUrl, customer)
      .map((res: Response) => {
        const data = res.json();
        console.log('insertCustomer status: ' + data.status);
        return data.customer;
      }).catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error instanceof Response) {
      let errMessage = '';
      try {
        errMessage = error.json().error;
      } catch (err) {
        errMessage = error.statusText;
      }
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'ASP.NET Core server error');
  }
}