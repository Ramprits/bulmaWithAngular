import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BookComponent },
  { path: 'books/:bookId', component: BookComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'customers/:CustomerId', component: CustomerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
