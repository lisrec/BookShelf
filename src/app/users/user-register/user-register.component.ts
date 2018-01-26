import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '@shelf-core/auth.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
	selector: 'app-user-register',
	templateUrl: './user-register.component.html',
	styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

	form = {
		username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(6)])
	}

	loading: boolean = true;

	constructor(private auth: AuthService) {}

	ngOnInit() {
		this.auth.user
			.subscribe(user => {
				this.loading = false
			})
	}

	onRegister() {
		const f = this.form

		if (f.email.valid && f.password.valid && f.username.valid) {
			this.auth.registerUser(this.form.username.value, this.form.email.value, this.form.password.value)
		}
	}

}
