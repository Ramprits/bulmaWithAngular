import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Fruit } from './fruit';

@Injectable()
export class FruitService {
  _baseUrl = 'assets/data/fruits.json';
  constructor(private httpClient: HttpClient) { }

  getFruits(): Observable<Fruit[]> {
    return this.httpClient.get(this._baseUrl)
      .map((fruits: Fruit[]) => {
        return fruits;
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
