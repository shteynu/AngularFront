import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redsquare',
  templateUrl: './redsquare.component.html',
  styleUrls: ['./redsquare.component.css']
})
export class RedsquareComponent implements OnInit {

  clr;
  toggle;
  rFlag;
  gFlag;
  bordFlag;

  constructor() { }

  ngOnInit() {
   /* this.toggle = false;
    this.clr = 'r';*/
    this.rFlag = false;
    this.gFlag = true;
    this.bordFlag = false;
  }

  toggleColor() {
   /*   this.clr = this.toggle ? 'r' : 'g';
      this.toggle = !this.toggle;*/
      this.rFlag = !this.rFlag;
      this.gFlag = !this.gFlag;
      this.bordFlag = !this.bordFlag;
  }

}
