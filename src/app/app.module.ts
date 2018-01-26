import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';

import { CoreModule } from '@shelf-core/core.module';
import { SharedModule } from '@shelf-shared/shared.module';
import { UsersModule } from '@shelf-users/users.module';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		FormsModule,
		BrowserModule,
		AppRoutingModule,
		AppMaterialModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		CoreModule,
		SharedModule,
		UsersModule,
		ServiceWorkerModule.register('/ngsw-worker.js', {
			enabled: environment.production
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
