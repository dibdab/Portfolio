import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import 'rxjs/RX';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title: string;

    constructor(private route: ActivatedRoute, router: Router) {
        router.events
        .filter(e => e instanceof NavigationEnd)
        .forEach(e => {
          this.title = route.root.firstChild.snapshot.data.title;
        });
    }

    ngOnInit() {
    }
}
