import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from "@shelf-core/auth.service";

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
	selector: 'app-user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

	form = {
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(3)])
	}

	loading: boolean = true;
	showLoginForm: boolean = false;
	userAuthorized: boolean = false;
	
	constructor(private auth: AuthService) {}

	ngOnInit() {
		this.auth.user
			.subscribe(user => {
				this.userAuthorized = !!user
				this.loading = false
			})
	}

	isFieldInvalid(field: string) {
		return true
	}

	onConnectGoogle() {
		this.auth.googleLogin()
	}

	onConnectFacebook() {
		this.auth.facebookLogin()
	}

	onLoginWithEmail() {
		this.showLoginForm = true
	}

	onBack() {
		this.showLoginForm = false
	}

	onRegister() {

	}

	onForget() {

	}

	onSignIn() {
		const f = this.form
		if (f.email.valid && f.password.valid)
			this.auth.emailLogin(f.email.value, f.password.value)
	}

	onSignOut() {
		this.auth.signOut()
	}
}
