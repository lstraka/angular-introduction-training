import { environment } from './../../environments/environment';
import { Userr } from '../userr';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private subject: Subject<Userr>;
  public subjectObservable: Observable<Userr>;


  private behaviorSubject: BehaviorSubject<Userr>;
  public behaviorObservable: Observable<Userr>;

  constructor(private http: HttpClient) {
    this.subject = new Subject();
    this.subjectObservable = this.subject.asObservable();

    // this.behaviorSubject = new BehaviorSubject(new Userr('ab', 'hihi', 4, null, null));
    this.behaviorSubject = new BehaviorSubject(null);
    this.behaviorObservable = this.behaviorSubject.asObservable();
  }

  public setSubject(user: Userr): void {
    this.subject.next(user);
  }

  public setBehaviorSubject(user: Userr): void {
    this.behaviorSubject.next(user);
  }


}
