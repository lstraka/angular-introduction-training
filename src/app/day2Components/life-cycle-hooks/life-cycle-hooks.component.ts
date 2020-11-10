import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  test = 'test string';
  constructor() {
    console.log('i am constructor');
  }

  ngOnInit(): void {
    console.log('i am on init')
  }

  ngAfterViewInit(): void {
    console.log('i am after view was init');
    setTimeout(() => { this.test = 'new string' }, 1);
  }

  ngOnChanges(): void {
    console.log('on changes');
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }

}
