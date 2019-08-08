import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sasha',
  templateUrl: './sasha.component.html',
  styleUrls: ['./sasha.component.css']
})
export class SashaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['home']);
  }
  goMasha() {
    this.router.navigate(['masha']);
  }
  goDasha() {
    this.router.navigate(['dasha']);
  }

}
