import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FruitService } from '../fruits/fruit.service';

@Component({
  selector: 'b-new-fruit',
  templateUrl: './new-fruit.component.html',
  styleUrls: ['./new-fruit.component.scss']
})
export class NewFruitComponent implements OnInit {
  fruitForm: FormGroup;
  constructor(private fb: FormBuilder, private fruitService: FruitService) { }

  ngOnInit() {
    this.fruitForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      path: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]]
    });
  }
  onSubmit(newFruit) {
    console.log(newFruit)
    this.fruitService.addFruit(newFruit);
  }
}
