import { SidenavComponent } from './core/sidenav.component/sidenav.component';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AppSettings } from './classes/app-settings';

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
    @ViewChild(SidenavComponent)
    private sidenavComponent: SidenavComponent;
    private router: Router;
    uimaskVisibility = 'hidden';
    private isActiveThemeLight = true;

    constructor(router: Router) {
        this.router = router;
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.changeUimaskState('hidden');
                if (window.innerWidth < AppSettings.SIDENAV_WIDTH_BREAKPOINT) {
                    this.sidenavComponent.changeSidenavState('closed');
                }
            }
        });
    }

    @HostListener('window:resize', ['$event']) onResize(event) {
        if (event.target.innerWidth >= AppSettings.SIDENAV_WIDTH_BREAKPOINT) {
            this.sidenavComponent.changeSidenavState('open');
            this.changeUimaskState('hidden');
        } else if (event.target.innerWidth < AppSettings.SIDENAV_WIDTH_BREAKPOINT && this.uimaskVisibility === 'hidden') {
            this.sidenavComponent.changeSidenavState('closed');
        }
    }

    public changeUimaskState(state?: string) {
        if (state) {
            this.uimaskVisibility = state;
        } else if (this.uimaskVisibility === 'hidden') {
            this.uimaskVisibility = 'visible';
        } else {
            this.uimaskVisibility = 'hidden';
        }
    }

    // TODO move theme switch and uimask to own components, theme switcher as generic slide toggle component in shared and uimask as core
}
