import { AngularFireModule, AuthMethods } from 'angularfire2';
import { ModuleWithProviders} from '@angular/core';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBHECNfkDn0dAypUgMlrJLoBkRkjnbFI30",
  authDomain: "radiant-torch-1344.firebaseapp.com",
  databaseURL: "https://radiant-torch-1344.firebaseio.com",
  storageBucket: "radiant-torch-1344.appspot.com",
  messagingSenderId: "558161287895"
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
