import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

class formItem {
  key: string;
  value: number;
  error: boolean;
}

@Component({
  selector: 'app-group-totals',
  templateUrl: './group-totals.component.html',
  styleUrls: ['./group-totals.component.scss']
})
export class GroupTotalsComponent implements OnInit {

  @Input() data: any; //get data from parent
  @Output() dataChange = new EventEmitter<object>(); //declare output as object
  groups: string[] = []; //declare groups string array
  formItems: Array<formItem> = []; //declare form items as an array of form item objects

  ngOnInit() {
    this.groups = Object.keys(this.data['groups']); //get array of group keys from data

    this.groups.forEach((group) => { //loop group keys
      let groupTotal: number = 0; //set total item count

      this.data.groups[group].forEach((item) => { //loop item keys in group
        if (this.data.items[item]) { //check item value exists
          groupTotal += this.data.items[item]; //add value of matching item to item count
        }
      });
      
      this.formItems.push({
        key: group,
        value: groupTotal,
        error: false,
      }); //push new form item into form items array
    });
  }

  valueChange(event: any) {
    const key = event.target.dataset.key;
    const value = parseInt(event.target.value);

    this.formItems.forEach((item) => { //loop form inputs
      if (item.key === key) { //if key matches changed input
        if (isNaN(value) || value < 0 || value > 1000 || value.toString() !== event.target.value) { //validate value
          item.error = true; //show error message
        } else {
          item.error = false; //hide error message

          this.dataChange.emit({
            group: key,
            value: value,
          }); //send new values to parent
        }
      }
    });
  }
}
