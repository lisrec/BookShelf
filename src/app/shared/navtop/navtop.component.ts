import { Component, OnInit } from '@angular/core'
import { RouterLink } from "@angular/router"
import { AuthService } from "@shelf-core/auth.service"

@Component({
	selector: 'app-navtop',
	templateUrl: './navtop.component.html',
	styleUrls: ['./navtop.component.scss']
})
export class NavtopComponent implements OnInit {

	title: string = "Bookshelf"
	showNavbar: boolean = false

	constructor(private auth: AuthService) { }

	ngOnInit() {
		this.auth.user
			.map(user => !!user)
			.subscribe(isLogged => this.showNavbar = isLogged)
	}

	onLogout() {
		this.auth.signOut()
	}

}