import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {
  _baseUrl = 'https://localhost:44366/api/customers';
  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get(this._baseUrl)
      .map((customers: Customer[]) => {
        return customers;
      }).catch(this.handleError);
  }

  getCustomer(customerId: any): Observable<Customer> {
    return this.httpClient.get(this._baseUrl + '/' + `${customerId.CustomerId}`)
      .map((customer: Customer) => {
        return customer;
      }).catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'ASP.NET Core server error');
  }
}
