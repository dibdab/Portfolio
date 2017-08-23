import { Component, OnInit } from '@angular/core';
import { Project, ProjectsResponse } from './classes/project';
import { ProjectsService } from './projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.scss'],
    providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
    projects: Project[];

    constructor(private projectsService: ProjectsService) { }

    // TODO look at HttpClient docs to improve this
    getProjects(): Project[] {
        return this.projectsService.getProjects();
    }

    ngOnInit() {
        this.projects = this.getProjects();
    }
}
