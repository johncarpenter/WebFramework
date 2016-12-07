import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
  sample : FirebaseObjectObservable<any[]>;
  constructor(private af : AngularFire){
    this.sample = af.database.object("/sample");
  }



}
