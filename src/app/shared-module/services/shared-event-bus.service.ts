import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedEventBusService {

  userDataEvent: EventEmitter<any> = new EventEmitter();
}
