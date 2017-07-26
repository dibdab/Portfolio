import { NgModule } from '@angular/core';
import { MdSidenavModule, MdIconModule, MdButtonModule, MdToolbarModule } from '@angular/material';

@NgModule({
    imports: [MdSidenavModule, MdIconModule, MdButtonModule, MdToolbarModule],
    exports: [MdSidenavModule, MdIconModule, MdButtonModule, MdToolbarModule]
})
export class MaterialModule {

}
