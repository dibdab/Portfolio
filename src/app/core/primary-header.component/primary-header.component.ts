import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AppSettings } from '../../classes/app-settings';
import 'rxjs/RX';

@Component({
    selector: 'app-primary-header',
    templateUrl: 'primary-header.component.html',
    styleUrls: ['./primary-header.component.scss'],
})

export class PrimaryHeaderComponent implements OnInit {
    @Output() callToggleNav = new EventEmitter();
    @Output() uimaskToggle = new EventEmitter();
    private title: string;

    constructor(private route: ActivatedRoute, router: Router) {
        router.events
            .filter(e => e instanceof NavigationEnd)
            .forEach(e => {
                this.title = route.root.firstChild.snapshot.data.title;
            });
    }

    public onToggleNav() {
        this.callToggleNav.emit();
        if (window.innerWidth < AppSettings.SIDENAV_WIDTH_BREAKPOINT) {
            this.uimaskToggle.emit();
        }
    }

    ngOnInit() { }
}
