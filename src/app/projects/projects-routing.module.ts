import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectsDetailsComponent } from './project-details.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProjectsComponent },
        { path: '/:id', component: ProjectsDetailsComponent }
    ])],
    exports: [RouterModule],
})
export class ProjectsRoutingModule { }
