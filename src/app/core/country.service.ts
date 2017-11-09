import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICountry } from './country';
import { Observable } from 'rxjs/Observable';
import { TrackerError } from './TrackerError';

@Injectable()
export class CountryService {
  _baseUrl = 'assets/data/countries.json';
  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<ICountry[] | TrackerError> {
    return this.httpClient.get(this._baseUrl).map((countries: ICountry[]) => {
      return countries;
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
