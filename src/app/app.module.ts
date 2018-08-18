import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTableDataSource,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import { MultiSelectListComponent } from './components/multi-select-list/multi-select-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    MultiSelectListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
