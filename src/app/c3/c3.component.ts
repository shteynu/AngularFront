import { Component, OnInit } from '@angular/core';
import {MessageBoxService} from '../Services/message-box.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  val;

  constructor(private msgBox: MessageBoxService) { }

  ngOnInit() {
  }

  send() {
    this.msgBox.getMsgBox().next(this.val);
  }

}
