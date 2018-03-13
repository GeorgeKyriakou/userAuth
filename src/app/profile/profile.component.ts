import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

      private email: any
      private apartmentNumber: any
      private id: any
      private hasTimeBooked: boolean
      private bookedDate: any
      private bookedZone: any

  constructor(
      private profileService:ProfileService
  ) { }

  ngOnInit() {
      this.profileService.getProfile()
      .subscribe(response => {
          this.apartmentNumber = response.apartmentNumber
          this.email = response.email
          this.id = response.id
          this.hasTimeBooked = response.bookedZone
          this.bookedDate = response.bookedDate
          this.bookedZone =response.bookedZone
        })
  }

}
