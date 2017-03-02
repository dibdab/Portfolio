import { Component, OnInit } from '@angular/core';

import { Hero } from 'app/classes/hero';
import { HeroService } from 'app/shared/services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.less']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(private heroService: HeroService) {};

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 4));
    }
}
