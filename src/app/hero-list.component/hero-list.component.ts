import { Component, Input } from '@angular/core';
import { Hero } from '../classes/hero';

@Component({
    selector: 'hero-list',
    templateUrl: 'hero-list.component.html',
    styleUrls: ['hero-list.component.less']
})
export class HeroListComponent {
     @Input() hero: Hero;
}
