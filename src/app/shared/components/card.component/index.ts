
import { NgModule } from '@angular/core';
import {
    CardActionsDirective,
    CardTitleDirective,
    CardSubtitleDirective,
    CardDescriptionDirective,
    CardImageDirective,
    CardHeaderComponent,
    CardComponent
} from './card.component';


@NgModule({
    exports: [
        CardActionsDirective,
        CardTitleDirective,
        CardSubtitleDirective,
        CardDescriptionDirective,
        CardImageDirective,
        CardHeaderComponent,
        CardComponent
    ],
    declarations: [
        CardActionsDirective,
        CardTitleDirective,
        CardSubtitleDirective,
        CardDescriptionDirective,
        CardImageDirective,
        CardHeaderComponent,
        CardComponent
    ],
})
export class CardModule { }


export * from './card.component';
