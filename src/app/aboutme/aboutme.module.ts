import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AboutMeRoutingModule } from './aboutme-routing.module';

import { AboutMeComponent } from './aboutme.component';

@NgModule({
    imports: [SharedModule, AboutMeRoutingModule],
    exports: [],
    declarations: [AboutMeComponent],
    providers: [],
})
export class AboutMeModule { }
