import { Component } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.less']
})
export class HomeComponent {
  constructor(router: Router) {
    }
  title = 'Home !';
}
