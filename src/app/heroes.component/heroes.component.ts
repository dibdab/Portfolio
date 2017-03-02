import { Component, OnInit } from '@angular/core';

import { Hero } from 'app/classes/hero';
import { HeroService } from 'app/shared/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.less'],
  providers: []
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {};

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelectedHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
