import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import 'rxjs/RX';

@Component({
    selector: 'app-primary-header',
    templateUrl: 'primary-header.component.html',
    styleUrls: ['./primary-header.component.scss'],
})

export class PrimaryHeaderComponent implements OnInit {
    title: string;

    constructor(private route: ActivatedRoute, router: Router) {
        router.events
            .filter(e => e instanceof NavigationEnd)
            .forEach(e => {
                this.title = route.root.firstChild.snapshot.data.title;
            });
    }
    ngOnInit() { }
}
