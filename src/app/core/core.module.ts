import { NgModule, Optional, SkipSelf } from '@angular/core';
// Imported for RouterLink used in navbar
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar.component/navbar.component';
import { PrimaryHeaderComponent } from './primary-header.component/primary-header.component';
import { SidenavComponent } from './sidenav.component/sidenav.component';

@NgModule({
    imports: [SharedModule, RouterModule, FormsModule],
    exports: [NavbarComponent, PrimaryHeaderComponent, SidenavComponent],
    declarations: [NavbarComponent, PrimaryHeaderComponent, SidenavComponent],
    providers: [],
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
