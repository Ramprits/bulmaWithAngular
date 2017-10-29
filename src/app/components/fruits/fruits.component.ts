import { Component, OnInit } from '@angular/core';
import { FruitService } from './fruit.service';

@Component({
  selector: 'b-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  fruits: any[];
  constructor(private fruitSerice: FruitService) { }
  ngOnInit() {
    this.getFruits();
  }
  getFruits() {
    this.fruitSerice.getFruits().subscribe(fruit => { this.fruits = fruit });
  }
}
