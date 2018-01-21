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
			emailVerified: user.emailVerified,
			displayName: user.displayName,
			photoURL: user.photoURL
		}

		return userRef.set(data)
	}

	private oAuthLogin(provider) {
		return this.afAuth.auth.signInWithPopup(provider)
			.then(cred => {
				this.updateUserData(cred.user)
				this.router.navigate(['/'])
			})
			.catch(e => {
				console.log(e.code)
				if (e.code == "auth/account-exists-with-different-credential") {
					alert("Konto z takim mailem już istnieje!\nSkorzystaj z innej metody.")
				}
			})
	}

	isAuthorized(): boolean {
		return !!this.user
	}

	registerUser(username: string, email: string, password: string) {
		return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
			.then(cred => {

				this.afAuth.auth.currentUser.sendEmailVerification()
					.catch(e => console.log(e))

				this.afAuth.auth.currentUser.updateProfile({
					displayName: username,
					photoURL: null
				}).catch(e => console.log(e))

				const userData: User = {
					uid: cred.uid,
					email: cred.email,
					emailVerified: cred.emailVerified,
					displayName: username,
					photoURL: null
				}

				this.updateUserData(userData)
				this.router.navigate(['/'])
			})
			.catch(e => console.log(e))
	}

	emailLogin(email: string, password: string) {
		return this.afAuth.auth.signInWithEmailAndPassword(email, password)
			.then(cred => {
				const userData: User = {
					uid: cred.uid,
					email: cred.email,
					emailVerified: cred.emailVerified,
					displayName: cred.displayName,
					photoURL: null
				}

				this.updateUserData(userData)
				this.router.navigate(['/'])
			})
			.catch(e => {
				console.log(e)
			})
	}

	googleLogin() {
		const provider = new firebase.auth.GoogleAuthProvider()
		return this.oAuthLogin(provider)
	}

	facebookLogin() {
		const provider = new firebase.auth.FacebookAuthProvider()
		return this.oAuthLogin(provider)
	}

	signOut() {
		this.afAuth.auth.signOut()
			.then(() => {
				this.router.navigate(['/login'])
			})
			.catch(e => console.log(e.code))
	}

}
