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
    getProjects() {
        return this.projectsService.getProjects((data) => {
            console.log(data.responseData);
            this.projects = data.responseData;
        });
    }

    ngOnInit() {
        this.getProjects();
    }
}
