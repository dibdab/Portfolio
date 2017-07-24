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
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import 'rxjs/RX';
var PrimaryHeaderComponent = (function () {
    function PrimaryHeaderComponent(route, router) {
        var _this = this;
        this.route = route;
        router.events
            .filter(function (e) { return e instanceof NavigationEnd; })
            .forEach(function (e) {
            _this.title = route.root.firstChild.snapshot.data.title;
        });
    }
    PrimaryHeaderComponent.prototype.ngOnInit = function () { };
    PrimaryHeaderComponent = __decorate([
        Component({
            selector: 'app-primary-header',
            templateUrl: 'primary-header.component.html',
            styleUrls: ['./primary-header.component.scss'],
        }),
        __metadata("design:paramtypes", [ActivatedRoute, Router])
    ], PrimaryHeaderComponent);
    return PrimaryHeaderComponent;
}());
export { PrimaryHeaderComponent };
//# sourceMappingURL=primary-header.component.js.map