import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private router: Router, public authService: AngularFireAuth) {
    this.user$ = this.authService.authState;
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