import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  array = [];
  keys;

  constructor() { }

  ngOnInit() {
    this.array.push({name: 'sasha', age: 61});
    this.array.push({name: 'masha', age: 31});
    this.array.push({name: 'dasha', age: 21});
    this.array.push({name: 'misha', age: 41});

    this.keys = Object.keys(this.array[0]);

  }

}
