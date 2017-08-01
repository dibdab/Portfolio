import { SidenavComponent } from './core/sidenav.component/sidenav.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
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
    @ViewChild(SidenavComponent)
    private sidenavComponent: SidenavComponent;
    private router: Router;
    private uimaskVisibility = 'hidden';

    constructor(router: Router) {
        this.router = router;
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.changeUimaskState('hidden');
                this.sidenavComponent.changeSidenavState('closed');
            }
        });
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
}
