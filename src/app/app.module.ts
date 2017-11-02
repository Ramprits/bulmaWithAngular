import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { InputMaskModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { EditorModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { ListboxModule } from 'primeng/primeng';
import { SpinnerModule } from 'primeng/primeng';
import { SliderModule } from 'primeng/primeng';
import { RatingModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { StepsModule } from 'primeng/primeng';
import { ScheduleModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { GMapModule } from 'primeng/primeng';
import { DataGridModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';
import { ConfirmDialogModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
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
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
