import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-sidenav',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['sidenav.component.scss'],
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

export class SidenavComponent implements OnInit {
    @ViewChild('sidenav') sidenav;
    private sidenavState: string;

    ngOnInit() {
        if (window.innerWidth < 1480) {
            this.sidenavState = 'closed';
        } else {
            this.sidenavState = 'open';
        }
    }

    @HostListener('window:resize', ['$event']) onResize(event) {
        if (event.target.innerWidth < 1480) {
            this.sidenavState = 'closed';
        } else if (event.target.innerWidth >= 1480) {
            this.sidenavState = 'open';
        }
    }

    public toggleNav() {
        if (this.sidenavState === 'closed') {
            this.sidenavState = 'open';
        } else {
            this.sidenavState = 'closed';
        }
    }
}
