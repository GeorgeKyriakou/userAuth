import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component'
import { MybookingsComponent } from './mybookings/mybookings.component'
import { AuthGuardGuard as AuthGuard } from './helper/auth-guard.guard'

export const appRoutes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  { path: 'mybookings', component: MybookingsComponent, canActivate:[AuthGuard]}
  
];
