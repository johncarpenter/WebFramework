import { Router } from '@angular/router';
import { AuthService } from '../auth';
export declare class AppComponent {
    private router;
    private auth;
    constructor(router: Router, auth: AuthService);
    signOut(): void;
    expanded: boolean;
    expandedState: string;
    toggleExpandedState(): void;
}
