import { Component, ViewChild } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../auth';

@Component({
  selector: 'app',
  styles: [
    './app.scss'
  ],
  templateUrl: './app.html',
  animations:[
    trigger('panelWidthTrigger', [
            state('expanded', style({ transform: 'translateX(0)', width:'240px' })),
            state('collapsed', style({ transform: 'translateX(-100%)', width:'90px' })),
            transition('collapsed => expanded', animate('200ms ease-in')),
            transition('expanded => collapsed', animate('200ms 200ms ease-out'))
        ]),
      ]

})

export class AppComponent {


  constructor(private router: Router,private auth: AuthService) {}

  signOut(): void {
    this.auth.signOut();
    this.auth.auth$.subscribe(authState => {
      this.router.navigate(['login']);
    });
  }

  expanded = true;
  expandedState = 'expanded';

  toggleExpandedState() {
        this.expandedState = this.expanded ? 'collapsed' : 'expanded';
        this.expanded = !this.expanded;
    }
}
