import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from '../../shared/config.service';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';
import { TrackerError } from '../../core/TrackerError';

@Injectable()
export class EmployeeService {
  private baseUrl = '';
  constructor(private httpClient: HttpClient, private utilService: ConfigService) {
    this.baseUrl = this.utilService.getApiURI();
  }

  getEmployees(): Observable<IEmployee[] | TrackerError> {
    return this.httpClient.get(this.baseUrl + `/employees`).map((employee: IEmployee[]) => {
      return employee;
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
