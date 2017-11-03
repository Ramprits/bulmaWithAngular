import { Component, OnInit } from '@angular/core';
import { Fruit } from './fruit';
import { FruitService } from './fruit.service';

@Component({
  selector: 'b-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {
  fruits: Fruit[];
  constructor(private fruitService: FruitService) { }

  ngOnInit() {
    this.fruitService.getFruits()
      .subscribe((fruits: Fruit[]) => { this.fruits = fruits; },
      (err: any) => { console.log('oops => There are some problems'); },
      () => { console.log('sucessfully loaded !'); }
      );
  }

}
