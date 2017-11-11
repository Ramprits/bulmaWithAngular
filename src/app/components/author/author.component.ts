import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthorService } from './author.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FormBuilder } from '@angular/forms';
import { IAuthor } from './author';
import { LoggerService } from '../../core/Logger.Service';
import { isDevMode } from '@angular/core';
import {
  Router, Event, NavigationStart, NavigationEnd,
  NavigationError, NavigationCancel
} from '@angular/router';

@Component({
  selector: 'b-author',
  templateUrl: './author.component.html'
})
export class AuthorComponent implements OnInit, OnDestroy {

  authors: any;
  authorRef: AngularFirestoreCollection<IAuthor>;
  loading: boolean;
  ladingRoute = false;

  constructor(private title: Title,
    private employeeService: AuthorService,
    private afs: AngularFirestore, private loggerService: LoggerService,
    public fb: FormBuilder, private router: Router
  ) {
    this.title.setTitle('Author');
    
  }
  
  ngOnInit() {
    if (isDevMode()) {
      console.log('👋 Development!');
      this.getAuthors();
    } else {
      console.log('💪 Production!');
    }
  }
  Add() {
    confirm('Are you sure want to add author');
  }
  getAuthors() {
    this.authorRef = this.afs.collection('authors');
    this.loading = true;
    this.authors = this.authorRef.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as IAuthor;
          const id = a.payload.doc.id;
          return { id, data };
        }, (error: any) => { this.loggerService.error(error); });
      });
    this.loggerService.log('');
    this.loading = false;
  }
  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }
}
interface EmployeeId extends IAuthor {
  id: string;
}
