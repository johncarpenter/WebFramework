import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { AuthService } from '../auth/services/auth-service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header-user',
  templateUrl: './app-header-user.html'
})

export class AppHeaderUserComponent {
  constructor(private auth: AuthService){}

  @Output() signOut = new EventEmitter(false);

}
