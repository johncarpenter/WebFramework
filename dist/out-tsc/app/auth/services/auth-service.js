var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AuthProviders, AuthMethods, FirebaseAuth } from 'angularfire2';
var AuthService = (function () {
    function AuthService(auth$) {
        var _this = this;
        this.auth$ = auth$;
        this.authState = null;
        auth$.subscribe(function (state) {
            _this.authState = state;
            console.log("Auth State:" + JSON.stringify(state));
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "id", {
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "profile", {
        get: function () {
            return this.authenticated ? this.authState.auth : '';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signIn = function (provider) {
        return this.auth$.login({ provider: provider })
            .catch(function (error) { return console.log('ERROR @ AuthService#signIn() :', error); });
    };
    AuthService.prototype.signInAnonymously = function () {
        return this.auth$.login({
            provider: AuthProviders.Anonymous,
            method: AuthMethods.Anonymous
        })
            .catch(function (error) { return console.log('ERROR @ AuthService#signInAnonymously() :', error); });
    };
    AuthService.prototype.signInWithGithub = function () {
        return this.signIn(AuthProviders.Github);
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this.signIn(AuthProviders.Google);
    };
    AuthService.prototype.signInWithTwitter = function () {
        return this.signIn(AuthProviders.Twitter);
    };
    AuthService.prototype.signOut = function () {
        this.auth$.logout();
    };
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [FirebaseAuth])
], AuthService);
export { AuthService };
//# sourceMappingURL=../../../../../src/app/auth/services/auth-service.js.map