import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'b-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Home');
   }

  ngOnInit() {
  }

}
