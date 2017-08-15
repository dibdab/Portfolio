import { ProjectImage } from './projectImage';
import { ProjectAction } from './projectAction';

export class Project {
    id: number;
    name: string;
    type: string;
    description: string;
    images: ProjectImage[];
    actions: ProjectAction[];
}
