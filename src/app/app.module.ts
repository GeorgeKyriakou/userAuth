import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

/*SERVICES*/
import { RegisterService } from './register/register.service';
import { LogInService } from './login/login.service';
import { TokenGuardService } from './helper/token-guard.service';
import { AuthGuardGuard } from './helper/auth-guard.guard';
import { AuthenticatedStatusService } from './helper/authenticated-status.service';
import { HomeService } from './home/home.service';
import { BookingsService } from './helper/bookings.service';
import { MonthService } from './mybookings/calendar/month.service'

/*ROUTES*/
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routes';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RegisterComponent } from './register/register.component';


import { ProfileComponent } from './profile/profile.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { CalendarComponent } from './mybookings/calendar/calendar.component';
import { DatePipe } from './helper/pipes/date.pipe';
import { TimePipe } from './helper/pipes/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    NavigationBarComponent,
    RegisterComponent,
    ProfileComponent,
    MybookingsComponent,
    CalendarComponent,
    DatePipe,
    TimePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
      RegisterService,
      LogInService,
      TokenGuardService,
      AuthGuardGuard,
      AuthenticatedStatusService,
      HomeService,
      BookingsService,
      MonthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
