import { Component } from '@angular/core';
import dataInput from '../data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Deloitte Angular Kata';
  data: object = dataInput;

  dataChange(newData: object) {
    this.data.groups[newData.group].forEach((item, index) => {
      if (index === 0) {
        this.data.items[item] = newData.value;
      } else {
        this.data.items[item] = 0;
      }
    });
  }
}
