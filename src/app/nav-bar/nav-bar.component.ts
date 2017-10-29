import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../components/auth/auth.service';

@Component({
  selector: 'b-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) {

  }
  userLogin() {
    this.authService.login();
  }
  userLogOut() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
