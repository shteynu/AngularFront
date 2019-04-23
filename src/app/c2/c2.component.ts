import { Component, OnInit } from '@angular/core';
import {CommonBasketService} from '../Services/common-basket.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private commonBasket: CommonBasketService) { }

  ngOnInit() {
  }

  getValue() {
    return this.commonBasket.getFirstToSecond();
  }

}
