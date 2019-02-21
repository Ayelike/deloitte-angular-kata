import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-totals',
  templateUrl: './group-totals.component.html',
  styleUrls: ['./group-totals.component.scss']
})
export class GroupTotalsComponent implements OnInit {

  @Input() data: object; //get data from parent
  groups: string[] = []; //declare groups string array
  formInputs: object = {}; //declare form input object

  constructor() {
  }

  ngOnInit() {
    this.groups = Object.keys(this.data['groups']); //get array of group keys from data

    this.groups.forEach((group) => { //loop group keys
      let groupTotal: number = 0; //set total item count

      this.data.groups[group].forEach((item) => { //loop item keys in group
        if (this.data.items[item]) { //check item value exists
          groupTotal += this.data.items[item]; //add value of matching item to item count
        }
      });

      this.formInputs[group] = groupTotal; //store group total in form input object
    });
  }

  valueChange(event: any) {
    console.log(event.target.dataset.key);
    console.log(event.target.value);
    
  }

}
