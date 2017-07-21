import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage.component/homepage.component';
import { AboutMePageComponent } from './aboutmepage.component/aboutmepage.component';
import { BlogPageComponent } from './blogpage.component/blogpage.component';
import { ContactPageComponent } from './contactpage.component/contactpage.component';
import { ProjectsPageComponent } from './projectspage.component/projectspage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomepageComponent, data: { title: 'Dibdab' } },
  { path: 'aboutme', component: AboutMePageComponent, data: { title: 'About Me' } },
  { path: 'blog', component: BlogPageComponent, data: { title: 'Blog' } },
  { path: 'contact', component: ContactPageComponent, data: { title: 'Contact' } },
  { path: 'projects', component: ProjectsPageComponent, data: { title: 'Projects' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [HomepageComponent, AboutMePageComponent, BlogPageComponent, ContactPageComponent, ProjectsPageComponent];
