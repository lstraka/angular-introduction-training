import { UserStatsComponent } from './../user-stats/user-stats.component';
import { Userr } from './../../userr';
import { Component, OnInit, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {

  @ViewChild(UserStatsComponent) userStats: UserStatsComponent;

  @ViewChildren(UserStatsComponent) allStats: QueryList<UserStatsComponent>;
  public users: Userr[];

  constructor() { }

  ngOnInit(): void {

    this.users = [];
    const us1 = new Userr('janko', 'hrasko', 24, 'janko@hrasko.com', ['footbal', 'hockey', 'watchingTV']);
    const us2 = new Userr('Juraj', 'Janosik', 87, 'jraj@hrasko.com', ['hockey', 'watchingTV']);
    const us3 = new Userr('Usr3', 'LstName3', 7, 'emmail@hrasko.com', []);
    const us4 = new Userr('Palo', 'NemaMeno', 99, 'reqqf@hrasko.com', ['watchingTV']);
    const us5 = new Userr('janiko', 'hrasenkko', 64, 'janeko@hrasko.com', ['footbal', 'hockey', 'watchingTV']);

    this.users.push(us1);
    this.users.push(us2);
    this.users.push(us3);
    this.users.push(us4);
    this.users.push(us5);
  }

  incrementAllChilds(): void {
    for (let userStat of this.allStats) {
      console.log(userStat);
      userStat.incrementCount();
    }
  }

  ngAfterViewInit(): void {
    this.userStats.sayHelloFromParent();

  }
}
