import { NgModule } from '@angular/core';

import { environment } from '@shelf/../environments/environment';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
	imports: [
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireAuthModule,
		AngularFirestoreModule
	],
	declarations: [],
	providers: [
		AuthService,
		AuthGuard
	]
})
export class CoreModule { }
