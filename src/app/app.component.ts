import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('sidenavState', [
            state('closed', style({
                display: 'hidden',
                transform: 'translateX(-300px)'
            })),
            state('open', style({
                display: 'block',
                transform: 'translateX(0)'
            })),
            transition('closed => open', animate('300ms ease-in')),
            transition('open => closed', animate('300ms ease-out'))
        ])
    ]
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }
}
