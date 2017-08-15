import { Injectable } from '@angular/core';
import { Project } from './classes/project';
import { PROJECTS } from './projects-mock';

@Injectable()
export class ProjectsService {
    getProjects(): Project[] {
        return PROJECTS;
    }
}
