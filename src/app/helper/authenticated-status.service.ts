import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TokenGuardService } from './token-guard.service'

@Injectable()
export class AuthenticatedStatusService {

  private authenticatedStatus = new BehaviorSubject<boolean>(this.tokenGuardService.isAuthenticated());
  currentStatus = this.authenticatedStatus.asObservable();

  constructor(private tokenGuardService:TokenGuardService) { }

  changeStatus(nextStatus) {
    this.authenticatedStatus.next(nextStatus)
  }

}
