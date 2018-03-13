import { Component, OnInit, Input} from '@angular/core';
import { TokenGuardService } from '../helper/token-guard.service'
import { Router } from '@angular/router'
import { AuthenticatedStatusService } from '../helper/authenticated-status.service'


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  private authenticated:boolean


  constructor( private tokenGuardService:TokenGuardService,
                private authenticatedStatusService:AuthenticatedStatusService,
               private router:Router
  ) {
    this.authenticated = this.tokenGuardService.isAuthenticated()
   }

  ngOnInit() {
    this.authenticatedStatusService.currentStatus
    .subscribe(isLoggedIn => {
      this.authenticated = isLoggedIn
      console.log(this.authenticated)
    })
  }

  logout() {
   localStorage.removeItem('authToken')
   this.authenticatedStatusService.changeStatus(false)
   this.router.navigate(['home'])
 }
}
