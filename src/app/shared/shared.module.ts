import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { DocViewerComponent } from './components/doc-viewer.component/doc-viewer.component';

@NgModule({
    imports: [CommonModule, MaterialModule],
    exports: [CommonModule, MaterialModule, DocViewerComponent],
    declarations: [DocViewerComponent],
    providers: [],
})
export class SharedModule {

}
