import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-multi-select-picklist-item',
  templateUrl: './multi-select-picklist-item.component.html',
  styleUrls: ['./multi-select-picklist-item.component.css']
})
export class MultiSelectPicklistItemComponent implements OnInit {

  optionsLeft: Array<{ number: number }>;
  optionsRight: Array<{ number: number }>;
  selectedOptionsRight: Array<string>;
  selectedOptionsLeft: Array<string>;

  constructor() {
  }

  moveSelectedRight() {
    for (let i = 0; i <= this.selectedOptionsLeft.length; i++) {
      for (let x = 0; x <= this.optionsLeft.length; x++) {
        console.log(this.optionsLeft);
        console.log(this.optionsLeft[x]);
        if (parseInt(this.selectedOptionsLeft[i]) === this.optionsLeft[x].number) {

      console.log('jacob really loves megan');
        }
      }
      }
    }

  // moveSelectedLeft(){
  //   console.log('button working');
  //   this.optionsRight.map(item => {
  //     return {
  //       number: item.number
  //     };
  //   }).forEach( item => this.selectedOptionsLeft.push(item));
  //   console.log(JSON.stringify(this.selectedOptionsLeft));
  // }

  ngOnInit() {
    this.optionsLeft = [{number: 1},
      {number: 2},
      {number: 3},
      {number: 4}];
    this.optionsRight = [];

  }
}
