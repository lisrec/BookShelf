import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "@shelf-core/auth.guard";

import { UserLoginComponent } from "@shelf-users/user-login/user-login.component";
import { UserProfileComponent } from '@shelf-users/user-profile/user-profile.component';
import { UserRegisterComponent } from '@shelf/users/user-register/user-register.component';

const routes: Routes = [
	{ 'path': 'login', component: UserLoginComponent },
	{ 'path': 'register', component: UserRegisterComponent },
	{ 'path': 'profile', component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
