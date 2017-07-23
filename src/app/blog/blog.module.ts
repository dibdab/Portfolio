import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
    imports: [SharedModule, BlogRoutingModule],
    exports: [],
    declarations: [BlogComponent],
    providers: [],
})
export class BlogModule { }
