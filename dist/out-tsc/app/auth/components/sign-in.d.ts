import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
export declare class SignInComponent {
    private auth;
    private router;
    constructor(auth: AuthService, router: Router);
    signInAnonymously(): void;
    signInWithGithub(): void;
    signInWithGoogle(): void;
    signInWithTwitter(): void;
    private postSignIn();
}
