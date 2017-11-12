import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { any } from './country';
import { Observable } from 'rxjs/Observable';
import { TrackerError } from './TrackerError';
import { ConfigService } from '../shared/config.service';

@Injectable()
export class DepartmentService {
  _baseUrl = '';
  constructor(private httpClient: HttpClient, private rootUrl: ConfigService) {
    this._baseUrl = this.rootUrl.getApiURI();
  }

  getDepartments(): Observable<any[] | TrackerError> {
    return this.httpClient.get(this._baseUrl + `/common`).map((department: any[]) => {
      return department;
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
