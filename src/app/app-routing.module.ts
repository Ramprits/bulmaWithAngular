import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { HomeComponent, BookComponent, CustomerComponent, CustomerDetailComponent, DashboardComponent, FruitComponent } from './components/index';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'books', component: BookComponent },
  { path: 'books/:bookId', component: BookComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'customers/:CustomerId', component: CustomerDetailComponent },
  { path: 'fruits', component: FruitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
