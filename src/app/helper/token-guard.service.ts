import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import * as jwt_decode from 'jwt-decode'

@Injectable()
export class TokenGuardService {

  constructor( private router: Router ) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken')? localStorage.getItem('authToken'): false ;
    if (token && !this.tokenHasExpired(token)) {
        return true
    } else {
      return false
    }
  }

  tokenHasExpired(token: string): boolean {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) return null;
    const now = new Date();
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date < now? true:false;
  }
}




