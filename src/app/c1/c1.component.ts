import { Component, OnInit } from '@angular/core';
import {CommonBasketService} from '../Services/common-basket.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  val;

  constructor(private commonBasket: CommonBasketService) { }

  ngOnInit() {
  }

  send() {
    this.commonBasket.setFirstToSecond(this.val);
  }

}
