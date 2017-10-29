import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { IContact } from './IContact';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Contact, ContactService } from './contact.service';

@Component({
  selector: 'b-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactReactiveForm: FormGroup;
  subject: string;
  mobile: string;
  email: string;
  messege: string;
  name: string;
  contactCollection: AngularFirestoreCollection<IContact>;
  contacts: Observable<IContact[]>;
  constructor(private afs: AngularFirestore, private router: Router, private contactService: ContactService, private fb: FormBuilder) {
    this.contactCollection = this.afs.collection('contacts');
    this.contacts = this.contactCollection.valueChanges();
  }
  ngOnInit() {
    this.contactReactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      message: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  onSubmit(form: NgForm) {
    this.contactService.addContact(form.value);
  }

}

