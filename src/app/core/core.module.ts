import { NgModule, Optional, SkipSelf } from '@angular/core';
// Imported for RouterLink used in navbar
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './navbar.component/navbar.component';
import { PrimaryHeaderComponent } from './primary-header.component/primary-header.component';

@NgModule({
    imports: [SharedModule, RouterModule],
    exports: [NavbarComponent, PrimaryHeaderComponent],
    declarations: [NavbarComponent, PrimaryHeaderComponent],
    providers: [],
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
