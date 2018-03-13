import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenGuardService } from './token-guard.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardGuard implements CanActivate {

    constructor (
        private tokenGuardService:TokenGuardService,
        private router:Router
    ){}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.tokenGuardService.isAuthenticated()){
            return true;
        } else {
            this.router.navigate(['login'])
            return false;
        }
    }
}
