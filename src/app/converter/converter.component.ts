import { Component, OnInit } from '@angular/core';
import {RatesService} from '../Services/rates.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  currenciesList: string [] = [];
  ratesObject = {};
  val = 1;
  currFrom: string;
  currTo: string;

  constructor(private ratesService: RatesService) { }

  ngOnInit() {
    this.ratesService.getRates()
      .subscribe((res: any) => {
       /* this.ratesObject = res.rates;
        this.ratesObject[res.base] = 1;
        this.currenciesList = Object.keys(this.ratesObject).sort();*/
        this.ratesObject = res.ratesObj;
        this.currenciesList = res.currs;
        this.currFrom = this.currenciesList[0];
        this.currTo = this.currenciesList[0];
      });
  }

  getResult() {
    return this.val / this.ratesObject[this.currFrom] * this.ratesObject[this.currTo];
  }

  setFrom(event) {
    this.currFrom = event;
  }

  setTo(event) {
    this.currTo = event;
  }
}
