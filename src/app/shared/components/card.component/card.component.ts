import { Component, Directive, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['./card.component.scss'],
    host: { 'class': 'card-component' }, // Ignore tslint - host metadata preferred here, hostbindings would require extra code in the class
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class CardComponent { }

@Directive({
    selector: 'app-card-image', // Ignore tslint - selector needs to be element to apply class
    host: { 'class': 'card-component-image' }
})

export class CardImageDirective { }

@Directive({
    selector: 'app-card-actions',
    host: { 'class': 'card-component-actions' }
})

export class CardIActionsDirective { }
