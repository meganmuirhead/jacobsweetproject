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
        console.log('this 1' + this.optionsLeft);
        console.log('this 2' + this.optionsLeft[x]);
        if (parseInt(this.selectedOptionsLeft[i]) === this.optionsLeft[x].number) {
          console.log('selected option', + this.selectedOptionsLeft[i]);
          console.log('selected', + this.optionsLeft[x].number);
          // this.selectedOptionsLeft.splice(i, 1);
          let itemRemoved = this.optionsLeft.splice(x, 1);
          console.log('before item removed');
          console.log(itemRemoved[0].number);
          this.optionsRight.push({number: itemRemoved[0].number})


        }
        console.log('this is selected option on the left' + this.selectedOptionsLeft)

      }
    }
  }

  moveSelectedLeft(){

  }

  ngOnInit() {
    this.optionsLeft = [{number: 1},
      {number: 2},
      {number: 3},
      {number: 4}];
    this.optionsRight = [];

  }
}
