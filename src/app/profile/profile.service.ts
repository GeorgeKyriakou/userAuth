import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class ProfileService {
  private registerUrl:string = 'http://localhost:5000/user/profile';
  private token:string = JSON.parse(localStorage.getItem('authToken'))

  constructor(
    private http: Http
  ) { }


  getProfile():Observable<any> {
    let headers = new Headers();
    headers.append('Authorization', this.token);
    return this.http.get(this.registerUrl, {headers: headers})
     .map(res => res.json());
  }


}
