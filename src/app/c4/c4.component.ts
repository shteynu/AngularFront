import { Component, OnInit } from '@angular/core';
import {MessageBoxService} from '../Services/message-box.service';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {

  result;

  constructor(private msgBox: MessageBoxService) { }

  ngOnInit() {
    this.msgBox.getMsgBox().asObservable().subscribe((res) => this.result = res);
  }



}
