import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shelf-shared/shared.module';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserResetPassComponent } from './user-reset-pass/user-reset-pass.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [UserLoginComponent, UserProfileComponent, UserRegisterComponent, UserResetPassComponent]
})
export class UsersModule { }
