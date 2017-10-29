import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { IContact } from './IContact';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {
  contactCollection: AngularFirestoreCollection<IContact>;
  contacts: Observable<IContact[]>;
  constructor(private afs: AngularFirestore, private router: Router) {
    this.contactCollection = this.afs.collection('contacts');
    this.contacts = this.contactCollection.valueChanges();
  }
  addContact(contact: Contact) {
    this.afs.collection('contacts').add({
      'name': contact.name,
      'messege': contact.messege,
      'email': contact.email,
      'mobile': contact.mobile,
      'subject': contact.subject
    });
    this.router.navigate(['/home']);
  }
}

export class Contact {
  constructor(public name: '', public email: '', public messege: '', public subject: '', public mobile: '') {
  }
}