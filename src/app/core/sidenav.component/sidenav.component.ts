import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AppSettings } from '../../classes/app-settings';

@Component({
    selector: 'app-sidenav',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['sidenav.component.scss'],
    animations: [
        trigger('sidenavState', [
            state('closed', style({
                transform: 'translateX(-300px)'
            })),
            state('open', style({
                transform: 'translateX(0)'
            })),
            transition('closed => open', animate('300ms ease-in')),
            transition('open => closed', animate('300ms ease-out'))
        ])
    ]
})

export class SidenavComponent implements OnInit {
    @ViewChild('sidenav') sidenav;
    sidenavState: string;

    ngOnInit() {
        if (window.innerWidth < AppSettings.SIDENAV_WIDTH_BREAKPOINT) {
            this.changeSidenavState('closed');
        } else {
            this.changeSidenavState('open');
        }
    }

    public changeSidenavState(state?: string) {
        if (state !== this.sidenavState) {
            if (window.innerWidth > AppSettings.SIDENAV_WIDTH_BREAKPOINT) {
                this.sidenavState = 'open';
            } else if (state) {
                this.sidenavState = state;
            } else if (this.sidenavState === 'closed') {
                this.sidenavState = 'open';
            } else {
                this.sidenavState = 'closed';
            }
        }
    }
}
