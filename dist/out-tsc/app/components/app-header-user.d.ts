import { EventEmitter } from '@angular/core';
import { AuthService } from '../auth/services/auth-service';
export declare class AppHeaderUserComponent {
    private auth;
    constructor(auth: AuthService);
    signOut: EventEmitter<{}>;
}
