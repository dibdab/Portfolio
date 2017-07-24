var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component/page-not-found.component';
var routes = [
    { path: 'blog', loadChildren: './blog/blog.module#BlogModule', data: { title: 'Blog' } },
    { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule', data: { title: 'Projects' } },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule', data: { title: 'Contact Me' } },
    { path: '', redirectTo: '/aboutme', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found' } }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map