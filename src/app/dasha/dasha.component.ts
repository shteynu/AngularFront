import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dasha',
  templateUrl: './dasha.component.html',
  styleUrls: ['./dasha.component.css']
})
export class DashaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goHome() {
    this.router.navigate(['home']);
  }
  goMasha() {
    this.router.navigate(['masha']);
  }
  goSasha() {
    this.router.navigate(['sasha']);
  }



}
