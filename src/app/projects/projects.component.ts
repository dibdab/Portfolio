import { Component, OnInit } from '@angular/core';
import { Project } from './classes/project';
import { ProjectsService } from './projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.scss'],
    providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
    projects: Project[];
    private projectsService: ProjectsService;

    getProjects() {
        this.projects = this.projectsService.getProjects();
    }

    ngOnInit() {
        this.getProjects();
    }
}
