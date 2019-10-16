import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HttpServices {

    constructor(private http: HttpClient) {
    }

    getPromiseCall() {
        return this.http.get('www.google.com').toPromise();
    }

    get(url) {
        return this.http.get(url).toPromise();
    }

    getObservableCall() {
        return this.http.post('www.google.com', {});
    }
}
