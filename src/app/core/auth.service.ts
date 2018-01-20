import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import * as firebase from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap'

import { User } from "@shelf-users/user";

@Injectable()
export class AuthService {

	user: Observable<User>

	constructor(private afAuth: AngularFireAuth,
				private afs: AngularFirestore,
				private router: Router) {
		
		this.user = this.afAuth.authState
			.switchMap(user => {
				if (user) {
					return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
				} else {
					return Observable.of(null)
				}
			})
	}

	private updateUserData(user: User) {
		const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`)

		const data: User = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL
		}

		return userRef.set(data)
	}

	private oAuthLogin(provider) {
		return this.afAuth.auth.signInWithPopup(provider)
			.then(cred => {
				this.updateUserData(cred.user)
			})
	}

	isAuthorized(): boolean {
		return !!this.user
	}

	googleLogin() {
		const provider = new firebase.auth.GoogleAuthProvider()
		return this.oAuthLogin(provider)
	}

	signOut() {
		this.afAuth.auth.signOut()
			.then(() => {
				this.router.navigate(['/'])
			})
	}

}
