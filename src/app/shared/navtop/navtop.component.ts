import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AuthService } from '@shelf-core/auth.service'

@Component({
	selector: 'app-navtop',
	templateUrl: './navtop.component.html',
	styleUrls: ['./navtop.component.scss']
})
export class NavtopComponent implements OnInit {

	title: string = 'Bookshelf'
	username: string
	showNavbar: boolean = false

	constructor(private auth: AuthService) { }

	ngOnInit() {
		this.auth.user
			.do(user => this.username = (user && user.displayName) ? user.displayName : '')
			.map(user => !!user)
			.subscribe(isLogged => this.showNavbar = isLogged)
	}

	onLogout() {
		this.auth.signOut()
	}

}
