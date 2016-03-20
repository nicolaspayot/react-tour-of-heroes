import { HEROES } from './mock-heroes';

export const hero = {

  query: () => Promise.resolve(HEROES),

  get: id => Promise.resolve(HEROES)
    .then(heroes => heroes.filter(hero => hero.id === id)[0])

};
