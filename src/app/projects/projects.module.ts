import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProjectsComponent } from './projects.component';
import { ProjectsDetailsComponent } from './project-details.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
    imports: [ProjectsRoutingModule, SharedModule],
    exports: [],
    declarations: [ProjectsComponent, ProjectsDetailsComponent],
    providers: [],
})
export class ProjectsModule { }
