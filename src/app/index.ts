import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AuthModule } from './auth';
import { FirebaseModule } from './firebase';
import { HomeModule } from './home';

import { AppComponent } from './components/app';
import { AppHeaderUserComponent } from './components/app-header-user';

import { MaterialModule } from '@angular/material';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { MaterializeDirective } from "angular2-materialize";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    AppHeaderUserComponent,
    MaterializeDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: false}),
    Angular2FontawesomeModule,
    MaterialModule.forRoot(),
    AuthModule,
    FirebaseModule,
    HomeModule,

  ]
})

export class AppModule {}
