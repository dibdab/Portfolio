import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutMeComponent } from './aboutme.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'aboutme', component: AboutMeComponent, data: { title: 'About Me' } }
    ])],
    exports: [RouterModule],
})
export class AboutMeRoutingModule { }
