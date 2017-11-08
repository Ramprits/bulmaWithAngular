import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// tslint:disable-next-line:max-line-length
import { HomeComponent, BookComponent, FruitService, FruitComponent, BookService, DashboardComponent, CustomerComponent, CustomerService, CustomerDetailComponent, AddCustomerComponent, ProductComponent } from './components/index';
// tslint:disable-next-line:max-line-length
import { MenuModule, PanelModule, ChartModule, CheckboxModule, OverlayPanelModule, InputTextModule, ButtonModule, InputMaskModule, InputTextareaModule, EditorModule, CalendarModule, RadioButtonModule, FieldsetModule, DropdownModule, MultiSelectModule, ListboxModule, SpinnerModule, SliderModule, RatingModule, DataTableModule, ContextMenuModule, TabViewModule, DialogModule, StepsModule, ScheduleModule, TreeModule, GMapModule, DataGridModule, TooltipModule, ConfirmationService, ConfirmDialogModule, GrowlModule, DragDropModule, GalleriaModule } from 'primeng/primeng';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { FielderrorsComponent } from './core/fielderrors/fielderrors.component';
import { CustomerNewService } from './components/customer/customer-new.service';
import { HttpModule } from '@angular/http';
import { LoggerService } from './core/index';
import { Error404Component } from './shared/404.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    FielderrorsComponent,
    DashboardComponent,
    CustomerComponent,
    CustomerDetailComponent,
    FruitComponent,
    ProductComponent,
    AddCustomerComponent,
    Error404Component
  ],
  imports: [
    HttpModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenuModule,
    PanelModule,
    OverlayPanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    ScheduleModule,
    TreeModule,
    GMapModule,
    DataGridModule,
    TooltipModule,
    ConfirmDialogModule,
    GrowlModule,
    DragDropModule,
    GalleriaModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [BookService, CustomerService, FruitService, CustomerNewService, LoggerService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
