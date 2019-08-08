import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  url = 'https://api.exchangeratesapi.io/latest';

 /* url = 'http://www.floatrates.com/daily/usd.json';*/

  constructor(private http: HttpClient) { }

  getRates() {
    return this.http.get(this.url)
      .pipe(map((orig: any) => {
        const ratesObject = orig.rates;
        ratesObject [orig.base] = 1;
        const currencies = Object.keys(ratesObject).sort();
        return {ratesObj: ratesObject, currs: currencies};
      }));
  }
}
