var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth/services/auth-service';
var AppHeaderUserComponent = (function () {
    function AppHeaderUserComponent(auth) {
        this.auth = auth;
        this.signOut = new EventEmitter(false);
    }
    return AppHeaderUserComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], AppHeaderUserComponent.prototype, "signOut", void 0);
AppHeaderUserComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'app-header-user',
        templateUrl: './app-header-user.html'
    }),
    __metadata("design:paramtypes", [AuthService])
], AppHeaderUserComponent);
export { AppHeaderUserComponent };
//# sourceMappingURL=../../../../src/app/components/app-header-user.js.map