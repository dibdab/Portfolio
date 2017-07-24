import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component/page-not-found.component';

const routes: Routes = [
    { path: 'blog', loadChildren: './blog/blog.module#BlogModule', data: { title: 'Blog' } },
    { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule', data: { title: 'Projects' } },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule', data: { title: 'Contact Me' } },
    { path: '', redirectTo: '/aboutme', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found' } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
