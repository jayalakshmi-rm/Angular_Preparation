import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.scss']
})
export class DashboardChildComponent implements OnInit, OnChanges {

  @Input() name;
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('child constructor');
  }

  ngOnInit() {
    console.log('child on init');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('on change');
  }


}
