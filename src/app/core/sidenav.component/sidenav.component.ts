import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
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
    private sidenavState: string;

    ngOnInit() {
        if (window.innerWidth < AppSettings.SIDENAV_WIDTH_BREAKPOINT) {
            this.changeSidenavState('closed');
        } else {
            this.changeSidenavState('open');
        }
    }

    @HostListener('window:resize', ['$event']) onResize(event) {
        if (event.target.innerWidth < AppSettings.SIDENAV_WIDTH_BREAKPOINT) {
            this.changeSidenavState('closed');
        } else if (event.target.innerWidth >= AppSettings.SIDENAV_WIDTH_BREAKPOINT) {
            this.changeSidenavState('open');
        }
    }

    public changeSidenavState(state?: string) {
        if (state) {
            this.sidenavState = state;
        } else if (this.sidenavState === 'closed') {
            this.sidenavState = 'open';
        } else {
            this.sidenavState = 'closed';
        }
    }
}
