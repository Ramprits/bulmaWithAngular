import { Component, OnInit } from '@angular/core';
import { Fruit } from './fruit';
import { FruitService } from './fruit.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'b-fruit',
  templateUrl: './fruit.component.html',
  styles: [`.row {
    background-color: white;
   margin-top: 10px;}`]
})
export class FruitComponent implements OnInit {
  fruits: Fruit[];
  constructor(private fruitService: FruitService, private title: Title) {
    this.title.setTitle('Fruits List');
  }

  ngOnInit() {
    this.fruitService.getFruits()
      .subscribe((fruits: Fruit[]) => { this.fruits = fruits; },
      (err: any) => { console.log('oops => There are some problems'); },
      () => { console.log('sucessfully loaded !'); }
      );
  }

}
