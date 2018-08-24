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
      let copyOfArray = this.optionsLeft.concat(this.optionsLeft)
      // this.copyOfArray = [this.optionsLeft];
      for (let x = 0; x <= copyOfArray.length; x++) {
        console.log('this 1' + this.optionsLeft);
        console.log('this 2' + this.optionsLeft[x]);
        if (parseInt(this.selectedOptionsLeft[i]) === copyOfArray[x].number) {
          console.log('selected option index', + this.selectedOptionsLeft[i]);
          console.log('option left', + this.optionsLeft[x].number);
          let itemRemoved = this.optionsLeft.splice(x, 1);
          console.log('before item removed');
          console.log('whatever  number i selected and  removed' + itemRemoved[0].number);
          // this.optionsRight.push(itemRemoved);

          this.optionsRight.push({number: itemRemoved[0].number})

          console.log('this is before the loop ends' + this.optionsLeft.length);

        }
        console.log('this is selected option on the left' + this.selectedOptionsLeft)
        console.log('this after i went through' + this.optionsLeft.length);

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
