import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
    imports: [SharedModule, AboutRoutingModule],
    exports: [],
    declarations: [AboutComponent],
    providers: [],
})
export class AboutModule { }
