var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
var AppComponent = (function () {
    function AppComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.expanded = true;
        this.expandedState = 'expanded';
    }
    AppComponent.prototype.signOut = function () {
        var _this = this;
        this.auth.signOut();
        this.auth.auth$.subscribe(function (authState) {
            _this.router.navigate(['login']);
        });
    };
    AppComponent.prototype.toggleExpandedState = function () {
        this.expandedState = this.expanded ? 'collapsed' : 'expanded';
        this.expanded = !this.expanded;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app',
        styles: [
            './app.scss'
        ],
        templateUrl: './app.html',
        animations: [
            trigger('panelWidthTrigger', [
                state('expanded', style({ transform: 'translateX(0)', width: '240px' })),
                state('collapsed', style({ transform: 'translateX(-100%)', width: '90px' })),
                transition('collapsed => expanded', animate('200ms ease-in')),
                transition('expanded => collapsed', animate('200ms 200ms ease-out'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [Router, AuthService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../../src/app/components/app.js.map