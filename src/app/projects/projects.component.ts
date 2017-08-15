import { Component } from '@angular/core';
import { Project } from './classes/project';
import { ProjectsService } from './projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.scss']
})
export class ProjectsComponent {
    projects: Project[];
}
