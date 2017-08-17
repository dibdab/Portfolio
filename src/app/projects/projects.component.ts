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

    // TODO look at HttpClient docs to improve this
    getProjects(): Project[] {
        this.projects = this.projectsService.getProjects()
            .then((projects) => {
                this.projects = projects.projects;
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

    ngOnInit() {
        this.getProjects();
    }
}
