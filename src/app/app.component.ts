import { Component } from '@angular/core';
import dataInput from '../data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Deloitte Angular Kata'; //set title
  data: object = dataInput; //get initial data from json

  dataChange(newData: object) {
    this.data.groups[newData.group].forEach((item, index) => { //loop group items
      if (index === 0) { //if it's the first item in the group
        this.data.items[item] = newData.value; //set item value to new value
      } else {
        this.data.items[item] = 0; //set item to zero
      }
    });
  }
}
