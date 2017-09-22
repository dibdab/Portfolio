import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ProjectsResponse } from './classes/project';

const URL_PROJECTS = '../assets/mockedBackend/projects.json';

@Injectable()
export class ProjectsService {
    private result: ProjectsResponse;

    constructor(private _http: HttpClient) { }

    // TODO Implement http caching and XSRF tokens when have actual backend.
    getProjects(callback: (data: ProjectsResponse) => void) {
        return this._http.get<ProjectsResponse>(URL_PROJECTS)
            .retry(3)
            .subscribe(
            data => {
                callback(data);
            },
            err => {
                // TODO Add actual error handling once attached to backend.
                if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.log('An error occurred:', err.error.message);
                } else {
                    // The backend returned an unsuccessful response code.
                    console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
                }
                this.result.responseStatus = err.status;
                this.result.responseMessage = err.error;
                this.result.responseData = err.data;
            }
            );
    };
}
