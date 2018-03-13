import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class LogInService {
    private registerUrl:string = 'http://localhost:5000/user/login';
    constructor(
        private http: Http
    ) { }

    logIn(user):Observable<any> {
        return this.http.post(this.registerUrl, user)
            .map(res => res.json());
    }
}
