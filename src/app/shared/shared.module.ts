import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { DocViewerComponent } from './components/doc-viewer.component/doc-viewer.component';
import { CardModule } from './components/card.component/index';


@NgModule({
    imports: [CommonModule, MaterialModule, CardModule],
    exports: [CommonModule, MaterialModule, DocViewerComponent, CardModule],
    declarations: [DocViewerComponent],
    providers: [],
})
export class SharedModule {

}
