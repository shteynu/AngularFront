import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*colors = ['pink', 'navy', 'lilac', 'lightgray'];*/
  Countries = {
    USA: ['New York', 'Chicago', 'Dallas', 'Los Angeles'],
    France: ['Paris', 'Lion', 'Cherburg', 'Marseille'],
    Germany: ['Berlin', 'Drezden', 'Hamburg', 'Munich'],
    Israel: ['Jerusalem', 'Tel-Aviv', 'Haifa', 'Rehovot'],
  };
  countries = Object.keys(this.Countries);
  cities;

  choiceHandler(event) {
    this.cities = this.Countries[event];
    console.log(event);
    console.log(this.cities[0]);
  }
}
