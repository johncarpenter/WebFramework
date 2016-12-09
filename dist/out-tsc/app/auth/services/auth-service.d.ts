import { FirebaseAuth, FirebaseAuthState } from 'angularfire2';
export declare class AuthService {
    auth$: FirebaseAuth;
    private authState;
    constructor(auth$: FirebaseAuth);
    readonly authenticated: boolean;
    readonly id: string;
    readonly profile: string | firebase.User;
    signIn(provider: number): firebase.Promise<FirebaseAuthState>;
    signInAnonymously(): firebase.Promise<FirebaseAuthState>;
    signInWithGithub(): firebase.Promise<FirebaseAuthState>;
    signInWithGoogle(): firebase.Promise<FirebaseAuthState>;
    signInWithTwitter(): firebase.Promise<FirebaseAuthState>;
    signOut(): void;
}
