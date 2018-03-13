import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { AuthenticatedStatusService } from '../helper/authenticated-status.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private isAuthed: boolean;

  constructor( private homeService:HomeService,
               private authenticatedStatusService: AuthenticatedStatusService
  ) { }

  ngOnInit() {
    this.authenticatedStatusService.currentStatus
     .subscribe(status => {
       this.isAuthed = status
     })
  }

}
