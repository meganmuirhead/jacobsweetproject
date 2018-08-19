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
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import { MultiSelectPicklistItemComponent } from './components/multi-select-picklist-item/multi-select-picklist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    MultiSelectPicklistItemComponent
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
