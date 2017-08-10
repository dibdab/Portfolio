import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { DocViewerComponent } from './components/doc-viewer.component/doc-viewer.component';
import { CardComponent } from './components/card.component/card.component';


@NgModule({
    imports: [CommonModule, MaterialModule],
    exports: [CommonModule, MaterialModule, DocViewerComponent, CardComponent],
    declarations: [DocViewerComponent, CardComponent],
    providers: [],
})
export class SharedModule {

}
