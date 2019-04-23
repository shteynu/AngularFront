import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input()array;
  @Output()choice = new EventEmitter();
  val;


  constructor() { }

  ngOnInit() {
    this.val = this.array[0];
    this.sendChoice();
  }

  sendChoice() {
    this.choice.emit(this.val);
  }
}
