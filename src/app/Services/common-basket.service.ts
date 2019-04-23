import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonBasketService {

  static firstTSecond;

  constructor() { }

  getFirstToSecond() {
    return CommonBasketService.firstTSecond;
  }
  setFirstToSecond(value) {
    CommonBasketService.firstTSecond = value;
  }
}
