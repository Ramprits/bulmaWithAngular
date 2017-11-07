import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Customer } from './customer';
import { HttpErrorResponse } from '@angular/common/http';
import { TrackerError } from '../../core/TrackerError';

@Injectable()
export class CustomerNewService {
  _baseUrl = 'assets/data/customers.json';
  constructor(private http: Http) { }
  getCustomers(): Observable<Customer[]> {
    return this.http.get(this._baseUrl)
      .map((response: Response) => response.json())
      .catch(this.handleError);
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
        return data.customer;
      }).catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse): Observable<TrackerError> {
    const dataError = new TrackerError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occurred retrieving data.';
    return Observable.throw(dataError);
  }
}
