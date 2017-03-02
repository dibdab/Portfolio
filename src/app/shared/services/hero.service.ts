import { Injectable } from '@angular/core';

import { Hero } from 'app/classes/hero';
import { HEROES } from 'app/mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
      return Promise.resolve(HEROES);
    }
}


