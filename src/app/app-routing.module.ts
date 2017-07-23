import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'aboutme' },
    { path: 'blog',  loadChildren: './blog/blog.module#BlogModule', data: { title: 'Blog' } },
    { path: 'projects',  loadChildren: './projects/projects.module#ProjectsModule', data: { title: 'Projects' } },
    { path: 'contact',  loadChildren: './contact/contact.module#ContactModule', data: { title: 'Contact Me' } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
