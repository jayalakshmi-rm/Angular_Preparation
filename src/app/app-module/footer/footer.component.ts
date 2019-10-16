import { Component, OnInit } from '@angular/core';
import { SharedEventBusService } from '../../shared-module/services/shared-event-bus.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footerVar1 = 'Footer var 1';
  userName: string;

  constructor(private sharedBus: SharedEventBusService) {
    this.sharedBus.userDataEvent.subscribe(
      (data) => {
        this.userName = data;
      }
    );
  }

  ngOnInit() {
  }

}
