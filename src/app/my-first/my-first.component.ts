import { ExtraUser } from './../extra-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})
export class MyFirstComponent implements OnInit {

  iWillBeNumber: number;
  private iWillBeBoolean: boolean;
  private iWillBeString: string;
  iAmDate: Date;
  iAmArrayNumbers: number[] = [];
  iAmArrayStrings: string[];
  iAmAnyType: any;
  // iAmUser: ExtraUser;
  public iAmUser: User;

  ngOnInit(): void {
    this.iWillBeNumber = 15;
    this.iWillBeString = 'i am string';
    this.iAmDate = new Date();
    this.iAmArrayNumbers = [];
    for (let i = 0; i < 5; i++) {
      this.iAmArrayNumbers.push(i);
    }

    this.iAmAnyType = true;
    this.iAmAnyType = 123;
    this.iAmAnyType = 'its string ';

    // this.iAmUser = new ExtraUser();
    this.iAmUser = new User();
    this.iAmUser.firstName = 'Lukas';
    this.iAmUser.lastName = 'Straka';
    // we initialized this in constructor of class
    // this.iAmUser.roles = [];
    const role1 = new Role(1, 'ADMIN');
    const role2 = new Role(2, 'SUPERIOR');
    this.iAmUser.roles.push(role1);
    this.iAmUser.roles.push(role2);

    console.log(this.iWillBeNumber, this.iWillBeString, this.iAmDate, this.iAmAnyType,
      this.iAmArrayNumbers, this.iAmArrayStrings, this.iAmUser);
  }

  getIsString(): string {
    return this.iWillBeString;
  }

}

export class User {
  firstName: string;
  lastName: string;
  age: number;
  roles: Role[];

  constructor(firstName?: string, lastName?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.roles = [];
  }
}

export class Role {
  roleID: number;
  role: string;

  constructor(roleID, role) {
    this.role = role;
    this.roleID = roleID;
  }
}
