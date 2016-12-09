import { Injectable } from '@angular/core';
import { AuthProviders, AuthMethods, FirebaseAuth, FirebaseAuthState } from 'angularfire2';


@Injectable()
export class AuthService {
  private authState: FirebaseAuthState = null;

  constructor(public auth$: FirebaseAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
      console.log("Auth State:"+JSON.stringify(state));
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  get profile() {
    return this.authenticated ? this.authState.auth : '';
  }

  signIn(provider: number): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({provider})
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInAnonymously(): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    })
      .catch(error => console.log('ERROR @ AuthService#signInAnonymously() :', error));
  }

  signInWithGithub(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Github);
  }

  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Google);
  }

  signInWithTwitter(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Twitter);
  }

  signOut(): void {
    this.auth$.logout();

  }
}
