import { Component, OnInit } from '@angular/core';
import { SharedServices, UserModel } from '../../shared-module/services/shared-services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'application';
  user: UserModel;
  fName: string;
  lName: string;

  constructor(private sharedServices: SharedServices) {
  }

  ngOnInit() {
    this.user = this.sharedServices.getUserObj();
  }

  updateDetails() {
    this.sharedServices.setUserObj({
      firstName: this.fName,
      lastName: this.lName
    });
  }
}
