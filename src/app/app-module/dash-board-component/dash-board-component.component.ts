import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { SharedServices } from '../../shared-module/services/shared-services';
import { CamelCasePipe } from '../../core-module/pipes/camel-case.pipe';

@Component({
  selector: 'app-dash-board-component',
  templateUrl: './dash-board-component.component.html',
  styleUrls: ['./dash-board-component.component.scss'],
  providers: [CamelCasePipe]
})
export class DashBoardComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {

  clientName = 'test';
  result;
  constructor(private sharedServices: SharedServices, private camelCase: CamelCasePipe) {
    this.clientName = this.sharedServices.getUserObj().firstName;
    console.log('constructor');
  }

  ngOnInit() {
    console.log('on init');
  }

  ngOnChanges() {
    console.log('on change');
  }

  ngAfterContentInit() {
    console.log('after content init');
  }

  ngAfterContentChecked() {
    console.log('after content checked');
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngOnDestroy() {
    console.log('on destroy');
  }

  modelChangeHandler(event) {
    this.clientName = this.camelCase.transform(event, 2);
  }

}
