import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '@shelf-core/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Component({
	selector: 'app-user-reset-pass',
	templateUrl: './user-reset-pass.component.html',
	styleUrls: ['./user-reset-pass.component.scss']
})
export class UserResetPassComponent implements OnInit {

	form = {
		email: new FormControl('', [Validators.required, Validators.email])
	}

	loading: boolean = true

	constructor(private auth: AuthService, private router: Router, private snackBar: MatSnackBar) {}

	ngOnInit() {
		this.auth.user
			.subscribe(user => {
				this.loading = false
			})
	}

	onResetPass() {
		if (this.form.email.valid) {
			this.auth.resetPassword(this.form.email.value)
				.then(() => {
					this.snackBar.open('Wiadomość z linkiem została wysłana.', '', { duration: 2500 })
					this.form.email.setValue('')
					this.form.email.markAsUntouched()
					this.form.email.clearValidators()
					setTimeout(() => {
						this.router.navigate(['/login'])
					}, 3500)
				})
				.catch(e => {
					console.log(e.code)
					switch (e.code) {
						case 'auth/user-not-found':
							this.snackBar.open('Błędny adres e-mail.', '', { duration: 3000 })
							break
					}
				})
		}
	}

}
