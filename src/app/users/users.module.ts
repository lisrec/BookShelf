import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from "@shelf/app-material.module";
import { SharedModule } from "@shelf-shared/shared.module";

import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppMaterialModule
  ],
  declarations: [UserLoginComponent, UserProfileComponent]
})
export class UsersModule { }
