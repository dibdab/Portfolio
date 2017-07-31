import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('uimaskVisibility', [
            state('hidden', style({
                visibility: 'hidden',
                opacity: 0
            })),
            state('visible', style({
                visibility: 'visible',
                opacity: 1
            })),
            transition('hidden => visible', animate('150ms ease-in')),
            transition('visible => hidden', animate('150ms ease-out'))
        ])
    ]
})
export class AppComponent implements OnInit {
    uimaskVisibility = 'hidden';

    constructor() { }

    ngOnInit() {
    }

    public uimaskToggle() {
        if (this.uimaskVisibility === 'hidden') {
            this.uimaskVisibility = 'visible';
        } else {
            this.uimaskVisibility = 'hidden';
        }
    }
}
