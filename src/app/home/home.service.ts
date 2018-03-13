import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class HomeService {
  private quoteUrl:string = 'http://api.adviceslip.com/advice';
  private scheduleUrl:string ='http://localhost:5000/schedule/getBookings';

  constructor(
    private http: Http
  ) { }


  getQuote():Observable<any> {
    return this.http.get(this.quoteUrl)
     .map(res => res.json());
  }

  getSchedule():Observable<any>{
    return this.http.get(this.scheduleUrl)
      .map(res => res.json());
  }

}
