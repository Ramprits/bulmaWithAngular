import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IPost } from './IPost';

@Injectable()
export class PostService {
  _baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }
  getPosts(): Observable<IPost[]> {
    return this.http.get(this._baseUrl)
      .map((response: Response) => response.json());
  }
}