import { Component, ViewChild, ContentChild, OnInit, AfterContentChecked, ViewContainerRef, ViewChildren } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SharedEventBusService } from '../../shared-module/services/shared-event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'application';
  userName: string;

  @ViewChild('appFooter', {read: '', static: true}) appFooter: FooterComponent;

  constructor(private sharedBus: SharedEventBusService) {
    this.sharedBus.userDataEvent.subscribe(
      (data) => {
        this.userName = data;
      }
    );
  }

  ngOnInit() {
    console.log('app Footer', this.appFooter.footerVar1);
    this.appFooter.footerVar1 = 'updated new footer content';
  }

  ngAfterContentChecked() {
    //
  }
}
