import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'b-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  constructor(private title: Title) { this.title.setTitle('Products List'); }

  ngOnInit() {
  }

}
