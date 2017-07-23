import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    imports: [ContactRoutingModule, SharedModule],
    exports: [],
    declarations: [ContactComponent],
    providers: [],
})
export class ContactModule { }
