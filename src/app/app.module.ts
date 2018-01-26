import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from '@shelf-core/core.module';
import { SharedModule } from '@shelf-shared/shared.module';
import { UsersModule } from '@shelf-users/users.module';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		AppMaterialModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		CoreModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
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
