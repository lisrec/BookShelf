import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '@shelf/app-material.module';
import { AppRoutingModule } from '@shelf/app-routing.module';

import { NavtopComponent } from './navtop/navtop.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  exports: [
    NavtopComponent,
    LoadingComponent,
    AppMaterialModule,
    AppRoutingModule
  ],
  declarations: [NavtopComponent, LoadingComponent]
})
export class SharedModule { }
