import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdButtonModule, MdToolbarModule } from '@angular/material';

import { DocViewerComponent } from './components/doc-viewer.component/doc-viewer.component';

@NgModule({
    imports: [CommonModule, MdIconModule, MdButtonModule, MdToolbarModule],
    exports: [CommonModule, MdIconModule, MdButtonModule, MdToolbarModule, DocViewerComponent],
    declarations: [DocViewerComponent],
    providers: [],
})
export class SharedModule {

}
