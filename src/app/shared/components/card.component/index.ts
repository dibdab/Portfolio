
import { NgModule } from '@angular/core';
import { CardComponent, CardImageDirective } from './card.component';


@NgModule({
    exports: [
        CardComponent,
        CardImageDirective
    ],
    declarations: [
        CardComponent,
        CardImageDirective
    ],
})
export class CardModule { }


export * from './card.component';
