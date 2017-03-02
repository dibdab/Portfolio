import { Component, Input } from '@angular/core';
import { Hero } from 'app/classes/hero';

@Component({
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.less']
})
export class HeroDetailComponent {
     @Input() hero: Hero;
}
