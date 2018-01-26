import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@shelf-core/auth.guard';

import { UserLoginComponent } from '@shelf-users/user-login/user-login.component';
import { UserProfileComponent } from '@shelf-users/user-profile/user-profile.component';
import { UserRegisterComponent } from '@shelf/users/user-register/user-register.component';
import { UserResetPassComponent } from '@shelf/users/user-reset-pass/user-reset-pass.component';

const routes: Routes = [
	{ path: 'login', component: UserLoginComponent },
	{ path: 'register', component: UserRegisterComponent },
	{ path: 'reset-pass', component: UserResetPassComponent },
	{ path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
	{ path: 'books', loadChildren: './books/books.module#BooksModule', canActivate: [AuthGuard] },
	{ path: '**', redirectTo: 'profile' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
