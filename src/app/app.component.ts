import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'b-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(private router: Router, public authService: AuthService) {

  }
  userLogin() {
    this.authService.login();
  }
  userLogOut() {
    this.authService.logout();
  }
}
