import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-inputs',
  templateUrl: './binary-inputs.component.html',
  styleUrls: ['./binary-inputs.component.css']
})
export class BinaryInputsComponent implements OnInit {

  javaCore = false;
  javaTech = false;
  webCore = false;
  angular = false;
  city = '';
  experience = false;

  constructor() { }

  ngOnInit() {
  }

  getData() {
    console.log({
      JavaCore : this.javaCore,
      JavaTech : this.javaTech,
      WebCore: this.webCore,
      Angular: this.angular,
      City: this.city,
      Experience: this.experience
    });
  }
}
