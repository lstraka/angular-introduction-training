import { UserService } from '../user.service';
import { User } from './../../my-first/my-first.component';
import { Userr } from './../../userr';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private _user: User | Userr;
  @Input() set user(user: Userr | User) {
    this._user = user;
    console.log(this.user ? this.user instanceof Userr : false);
    this.isUserr = this.user ? this.user instanceof Userr : false;
  }
  get user() {
    return this._user;
  }
  constructor(readonly userService: UserService) { }

  isUserr = false;
  ngOnInit(): void {

  }

  public setUserToSubject(user: Userr): void {
    console.log('setting user ', user);
    this.userService.setSubject(user);
  }

  public setUserToBehaviorSubj(user: Userr): void{
    console.log('setting behaviorSubj', user);
    this.userService.setBehaviorSubject(user);
  }

}
