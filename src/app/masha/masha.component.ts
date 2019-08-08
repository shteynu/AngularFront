import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-masha',
  templateUrl: './masha.component.html',
  styleUrls: ['./masha.component.css']
})
export class MashaComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }
  goHome() {
    this.router.navigate(['home']);
  }
  goSasha() {
    this.router.navigate(['sasha']);
  }
  goDasha() {
    this.router.navigate(['dasha']);
  }
}
