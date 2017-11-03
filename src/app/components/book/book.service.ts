import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IBook } from './book';

@Injectable()
export class BookService {
  baseUrl = 'assets/data/book.json';
  constructor(private httpClient: HttpClient) {
  }
  getBooks(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.baseUrl)
      .map((books: IBook[]) => {
        return books;
      })
      .catch(this.handleError);
  }

  getBook(bookId: IBook) {
    return this.httpClient.get(this.baseUrl + `/` + `${bookId.BookId}`)
      .map((books: IBook) => {
        return books;
      })
      .catch(this.handleError);
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
