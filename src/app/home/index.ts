import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';

import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {path: 'home', component: MainComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
  ]
})

export class HomeModule {}
