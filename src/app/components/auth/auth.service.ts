import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import * as _ from 'lodash';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

interface User {
  uid: string;
  email: string;
  photoUrl?: string;
  favoriteColor?: string;
}

@Injectable()
export class AuthService {
  user: Observable<User>;
  user$: Observable<firebase.User>;
  constructor(private router: Router,
    public authService: AngularFireAuth,
    public afs: AngularFirestore) {
    this.user$ = this.authService.authState;
    this.user = this.authService.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
      } else
        return Observable.of(null);
    });
  }

  login() {
    this.authService.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(_ => this.router.navigate([`/home`]))
      .catch(error => console.log('auth error', error));
  }

  logout() {
    this.authService.auth.signOut();
    this.router.navigate([`/home`]);
  }

}