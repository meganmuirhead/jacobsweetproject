import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-multi-select-picklist-item',
  templateUrl: './multi-select-picklist-item.component.html',
  styleUrls: ['./multi-select-picklist-item.component.css']
})
export class MultiSelectPicklistItemComponent implements OnInit {

  optionsLeft: Array<{ number: number }>;
  optionsRight: Array<{ number: number }>;
  selectedOptionsRight;
  selectedOptionsLeft;

  constructor() {
  }

  moveSelectedLeft() {
    this.optionsLeft.map(item => {
      return {
        number: item.number
      };
    }).forEach(item => this.optionsRight.push(item));
    console.log(JSON.stringify(this.optionsRight));
  }
  moveSelectedRight() {
    console.log('button working');
  }

  ngOnInit() {
    this.optionsLeft = [{number: 1},
      {number: 2},
      {number: 3},
      {number: 4}];
    this.optionsRight = [];

  }
}
