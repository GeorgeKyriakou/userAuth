import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class BookingsService {
    private bookingsUrl:string = 'http://localhost:5000';
    constructor(
        private http: Http
    ) { }

    getAll():Observable<object> {
        return this.http.get(this.bookingsUrl + '/schedule/getBookings')
            .map(res => res.json());
    }
    getPeriod(start, end):Observable<object> {
      return this.http.get(this.bookingsUrl + '/schedule/getperiod/' + start + '/' + end)
          .map(res => res.json());
    }
}
