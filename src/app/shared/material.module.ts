import { NgModule } from '@angular/core';
import { MdSidenavModule, MdIconModule, MdButtonModule, MdToolbarModule, MdRippleModule } from '@angular/material';

@NgModule({
    imports: [MdSidenavModule, MdIconModule, MdButtonModule, MdToolbarModule, MdRippleModule],
    exports: [MdSidenavModule, MdIconModule, MdButtonModule, MdToolbarModule, MdRippleModule]
})
export class MaterialModule {

}
