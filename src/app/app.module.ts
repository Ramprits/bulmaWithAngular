import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { DataTableModule } from 'primeng/primeng';
import { SharedModule } from 'primeng/primeng';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from './components/post/post.service';
import { ContactComponent } from './components/contact/contact.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PostComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    SharedModule,
    // AngularFireAuthModule, 
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
