import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class RegisterService {
    private registerUrl:string = 'http://localhost:5000/user/register';
    constructor(
        private http: Http
    ) { }

    registerNewUser(user):Observable<any> {
        return this.http.post(this.registerUrl, user)
            .map(res => res.json());
    }
}
