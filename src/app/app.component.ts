import { Component } from '@angular/core';
import dataInput from '../data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Deloitte Angular Kata';
  data = dataInput;
}
