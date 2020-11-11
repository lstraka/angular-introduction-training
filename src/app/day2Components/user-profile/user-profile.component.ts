import { Subscription } from 'rxjs';

import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Userr } from 'src/app/userr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  @Output() myFirstOutput = new EventEmitter<string>();

  message: string;
  userFromOutside: Userr;
  private subjectObsSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    // subscription using just a Subject object
    // this.subjectObsSubscription = this.userService.subjectObservable.subscribe(user => {
    //   console.log(user, 'in userprofile subscribe');
    //   this.userFromOutside = user;
    // });
    this.subjectObsSubscription = new Subscription();
    // subscription with behavior subject using add() overs subscription object
    this.subjectObsSubscription.add(this.userService.behaviorObservable.subscribe(behaviorUsr => {
      console.log(behaviorUsr);
      this.userFromOutside = behaviorUsr;
    }),
    // if you uncomment this code, both subscriber should listen
    // this.userService.subjectObservable.subscribe(user => {
      //   console.log(user, 'in userprofile subscribe');
      //   this.userFromOutside = user;
      // })
    );

  }

  sendToParent() {
    this.myFirstOutput.emit(this.message);
  }


  ngOnDestroy() {
    this.subjectObsSubscription.unsubscribe();
  }
}
