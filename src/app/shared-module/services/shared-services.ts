
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class SharedServices  {

    private userObj: UserModel;
  constructor() {
      this.userObj = new UserModel();
      this.userObj.firstName = 'First name';
      this.userObj.lastName = 'Last name';
  }

  getUserObj() {
      return this.userObj;
  }

  setUserObj(data) {
      console.log('set', data);
      this.userObj = data;
  }

}

export class UserModel {
    firstName: string;
    lastName: string;
}
