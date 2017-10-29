import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { IContact } from './IContact';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Contact, ContactService } from './contact.service';

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
  constructor(private afs: AngularFirestore, private router: Router, private contactService: ContactService) {
    this.contactCollection = this.afs.collection('contacts');
    this.contacts = this.contactCollection.valueChanges();
  }
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.contactService.addContact(form.value);
  }

}

