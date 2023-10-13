import { Component, OnInit } from '@angular/core';

// import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs'; //Allow data to be fetched asynchrously

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  
  
  constructor(private heroService: HeroService) {}
  
  ngOnInit(): void {
    this.getHeroes();
  }
  // getHeroes(): void {
  //   //get all heros from heroes service
  //   this.heroes = this.heroService.getHeroes(); //assumes that this fetches data synchronously

  // }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
  

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
