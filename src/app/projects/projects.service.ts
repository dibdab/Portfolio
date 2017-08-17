import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Project, ProjectsResults } from './classes/project';

const URL_PROJECTS = './projects.json';

@Injectable()
export class ProjectsService {
    constructor(private _http: Http) { }

    // TODO look at HttpClient docs to improve this
    getProjects(): Project[] {
        return this._http.get<ProjectsResults>(URL_PROJECTS)
            .sub((response: Response) => response.json())
            .toPromise()
            .succes
            .catch((err: any) => {
                console.log(err);
                return Promise.reject(err);
            });
    }

}
