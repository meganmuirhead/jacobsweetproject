import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-multi-select-picklist-item',
  templateUrl: './multi-select-picklist-item.component.html',
  styleUrls: ['./multi-select-picklist-item.component.css']
})
export class MultiSelectPicklistItemComponent implements OnInit {

  options1: Array<{ number: number }>;
  options2: Array<{ number: number }>;
  options3: Array<{ number: number }>;
  options4: Array<{ number: number }>;


  constructor() {
  }

  moveSelectedLeft(item) {
  }

  moveSelectedRight(item) {
  }

  ngOnInit() {
    this.options1 = [{number: 1},
      {number: 2},
      {number: 3},
      {number: 4}];
    this.options2 = [{number: 1},
      {number: 2},
      {number: 3},
      {number: 4}];
    this.options3 = [{number: 1},
      {number: 2},
      {number: 3},
      {number: 4}];
    this.options4 = [{number: 1},
      {number: 2},
      {number: 3},
      {number: 4}];
  }

}
