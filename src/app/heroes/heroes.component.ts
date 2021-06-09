import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

//import { HEROES } from '../mock-heroes'; // importing the newly added component

import {HeroService} from '../hero.service';//importing the hero service

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[] = [];

  //inject the service in constructor
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}