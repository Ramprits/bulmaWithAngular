import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IBook } from './book';

@Injectable()
export class BookService {
  baseUrl = '/api/books';
  baseStatesUrl = '/api/states';
  constructor(private http: HttpClient) {

  }
  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.baseUrl)
      .map((books: IBook[]) => {
        return books;
      })
      .catch(this.handleError);
  }
  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'ASP.NET Core server error');
  }
}
