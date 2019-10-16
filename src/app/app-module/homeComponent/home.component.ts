import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SharedServices, UserModel } from '../../shared-module/services/shared-services';
import { HttpServices } from '../../core-module/services/http.services';
import { SharedEventBusService } from '../../shared-module/services/shared-event-bus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'application';
  user: UserModel;
  fName: string;
  lName: string;
  @ViewChild('promise', {read: '', static: false}) promiseTextArea: ElementRef;
  @ViewChild('observable', {read: '', static: false}) observableTextArea: ElementRef;

  constructor(private sharedServices: SharedServices, private http: HttpServices, private sharedBus: SharedEventBusService) {
  }

  ngOnInit() {
    this.user = this.sharedServices.getUserObj();
  }

  ngAfterViewInit() {
    console.log('promiseTextArea', this.promiseTextArea);
    let title = 'new one inside method';
    title = 'test';
    console.log('title', title);
  }

  updateDetails = () => {
    this.sharedServices.setUserObj(this.user);
    this.sharedBus.userDataEvent.emit(this.user.firstName);
  }

  callObservable() {
    const sub = this.http.getObservableCall().subscribe(
      (res) => {
        console.log(res);
        this.observableTextArea.nativeElement.value += ('response::' + res + '\n');
      },
      (error) => {
        console.log(error);
        this.observableTextArea.nativeElement.value += ('err::' + error + '\n');
      },
      () => {
        console.log('complete event of observable');
        this.observableTextArea.nativeElement.value += ('completed' + '\n');
        sub.unsubscribe();
      }
    );
  }

  callPromise() {
    const response = this.http.getPromiseCall();
    console.log('response', response);
    this.http.getPromiseCall().then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      });
  }
}
