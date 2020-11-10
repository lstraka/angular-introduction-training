import { User } from './../../my-first/my-first.component';
import { Userr } from './../../userr';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: Userr ;
  constructor() { }

  isUserss = false;
  ngOnInit(): void {
    this.isUserss = this.user ? this.user instanceof Userr : false;
  }

}
