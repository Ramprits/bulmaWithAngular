import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Injectable()
export class FruitService {
  fruitsCollection: AngularFirestoreCollection<any>;
  fruits: Observable<any[]>;
  constructor(private afs: AngularFirestore, private router: Router) {
  }
  getFruits(): Observable<any[]> {
    this.fruitsCollection = this.afs.collection('fruits');
    return this.fruits = this.fruitsCollection.valueChanges();
  }
  addFruit(fruit: Fruit) {
    this.afs.collection('fruits').add({
      'name': fruit.name,
      'title': fruit.title,
      'path': fruit.path,
      'description': fruit.description
    });
    this.router.navigate(['/home']);
  }
}

export class Fruit {
  constructor(public name: '', public title: '', public path: '', public description: '') { }
}