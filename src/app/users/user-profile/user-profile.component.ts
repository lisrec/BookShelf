import { Component, OnInit } from '@angular/core';
import { AuthService } from "@shelf-core/auth.service";
import { User } from "@shelf-users/user";

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

	user: User;

	constructor(public auth: AuthService) {
		auth.user.subscribe(user => this.user = user)
	}

}
