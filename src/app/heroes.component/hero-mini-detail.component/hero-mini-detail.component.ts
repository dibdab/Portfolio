import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from 'app/classes/hero';

@Component({
    selector: 'hero-mini-detail',
    templateUrl: 'hero-mini-detail.component.html',
    styleUrls: ['hero-mini-detail.component.less']
})
export class HeroMiniDetailComponent {
    @Input() selectedHero: Hero;

    constructor(
    private router: Router) { }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
