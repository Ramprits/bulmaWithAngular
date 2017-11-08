import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthorService } from './author.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IAuthor } from './author';

@Component({
  selector: 'b-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  authors: any;
  authorRef: AngularFirestoreCollection<IAuthor>;
  loading: boolean;

  constructor(private title: Title,
    private employeeService: AuthorService,
    private afs: AngularFirestore,
    public fb: FormBuilder, private router: Router
  ) {
    this.title.setTitle('Author List');
  }

  ngOnInit() {
    this.getAuthors();
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

        }, (error) => { console.error('There are some : ', { error }); });
      });
    this.loading = false;
  }

}
interface EmployeeId extends IAuthor {
  id: string;
}
