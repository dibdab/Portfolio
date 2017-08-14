import { Component, Directive, ChangeDetectionStrategy } from '@angular/core';

@Directive({
    selector: '[appCardImage]',
    host: { 'class': 'card-component-image' } // Ignore tslint - host metadata preferred here, hostbindings would require extra code in the class
})

export class CardImageDirective { }

@Directive({
    selector: '[appCardDescription]',
    host: { 'class': 'card-component-description' }
})

export class CardDescriptionDirective { }

@Directive({
    selector: '[appCardActions]',
    host: { 'class': 'card-component-actions' }
})

export class CardActionsDirective { }

@Directive({
    selector: '[appCardTitle]',
    host: { 'class': 'card-component-title' }
})

export class CardTitleDirective { }

@Directive({
    selector: '[appCardSubtitle]',
    host: { 'class': 'card-component-subtitle' }
})

export class CardSubtitleDirective { }

@Component({
    selector: 'app-card-header',
    templateUrl: 'card.component.header.html',
    host: { 'class': 'card-component-header' },
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardHeaderComponent { }

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['./card.component.scss'],
    host: { 'class': 'card-component' },
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent { }
