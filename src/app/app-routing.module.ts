import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthGuard } from './components/auth/auth.guard';
import { FruitsComponent } from './components/fruits/fruits.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostComponent, canActivate: [AuthGuard] },
  { path: 'contacts', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'fruits', component: FruitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
