import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { AuthGuard } from './auth/auth.guard';
import { NoAuthGuard } from './auth/no-auth.guard';
import { UsersComponent } from './pages/users/users.component';
import { AvailableHousesComponent } from './pages/available-houses/available-houses.component';
import { MyHouseComponent } from './pages/my-house/my-house.component';
import { SingleComponent } from './pages/single/single.component';
import { AdminHousesComponent } from './pages/admin-houses/admin-houses.component';
import { OffersDoneComponent } from './pages/offers-done/offers-done.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'user' , component: UserComponent,canActivate:[AuthGuard],data:{roles:'User'}},
  {path: 'available-houses' , component: AvailableHousesComponent,canActivate:[AuthGuard],data:{roles:'User'}},
  {path: 'my-houses/:id' , component: MyHouseComponent},
  {path: 'single' , component: SingleComponent,canActivate:[AuthGuard],data:{roles:'User'}},
  {path: 'admin' , component: AdminComponent,canActivate:[AuthGuard],data:{roles:'Admin'}},
  {path: 'users' , component: UsersComponent,canActivate:[AuthGuard],data:{roles:'Admin'}},
  {path: 'admin-houses' , component: AdminHousesComponent,canActivate:[AuthGuard],data:{roles:'Admin'}},
  {path: 'offers-done' , component: OffersDoneComponent,canActivate:[AuthGuard],data:{roles:'Admin'}},
  {path: 'login' , component: LoginComponent,canActivate:[NoAuthGuard]},
  {path: 'forbidden' , component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
