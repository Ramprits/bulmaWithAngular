import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { DataTableModule } from 'primeng/primeng';
import { SharedModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from './components/post/post.service';
import { ContactComponent } from './components/contact/contact.component';
import { environment } from '../environments/environment';
import { ContactService } from './components/contact/contact.service';
import { AuthService } from './components/auth/auth.service';
import { AuthGuard } from './components/auth/auth.guard';
import { FruitsComponent } from './components/fruits/fruits.component';
import { FruitService } from './components/fruits/fruit.service';
import { NewFruitComponent } from './components/new-fruit/new-fruit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PostComponent,
    ContactComponent,
    FruitsComponent,
    NewFruitComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    AngularFireAuthModule,
    SharedModule,
    ReactiveFormsModule,
    HttpModule,
    GrowlModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    ConfirmationService,
    PostService,
    ContactService,
    AuthService,
    AuthGuard,
    FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
