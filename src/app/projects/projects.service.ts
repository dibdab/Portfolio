import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Project } from './classes/project';

const URL_PROJECTS = './projects-.json';

@Injectable()
export class ProjectsService {
    constructor(private _http: Http) { }

    getProjects() {
        return this._http.get(URL_PROJECTS)
            .map((response: Response) => response.json())
            .toPromise()
            .catch((err: any) => {
                console.log(err);
                return Promise.reject(err);
            });
    }
}
