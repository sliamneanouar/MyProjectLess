import { Component } from '@angular/core';
import { Router} from "@angular/router";

import { ServicesData} from "../myServices/services";

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.less'],
  providers: [
        ServicesData
    ]
})
export class HomeComponent {
  constructor(router: Router, protected _ServicesData: ServicesData) {
    console.log("test ");
    console.log("this._ServicesData :: ", this._ServicesData);
    this._ServicesData.about()
        .subscribe((data: any) => {
            console.log("data  :: ", data);
        },
        error => {
            console.log('error when call GetCardStructures rest service !');
        },
        () => null);
  };

  title = 'Home !';
}
