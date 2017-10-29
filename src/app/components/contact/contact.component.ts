import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { IContact } from './IContact';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'b-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  subject: string;
  mobile: string;
  email: string;
  messege: string;
  name: string;
  contactCollection: AngularFirestoreCollection<IContact>;
  contacts: Observable<IContact[]>;
  constructor(private afs: AngularFirestore, private router: Router) {
    this.contactCollection = this.afs.collection('contacts');
    this.contacts = this.contactCollection.valueChanges();
  }
  ngOnInit() {
  }
  addContact() {
    this.afs.collection('contacts').add({
      'name': this.name,
      'messege': this.messege,
      'email': this.email,
      'mobile': this.mobile,
      'subject': this.subject
    });
    this.router.navigate(['/home']);
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }

  }
}
