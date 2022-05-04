import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // hero: Hero ={id : 1, name : 'Windstorm'};
  heroes = Heroes;
  selectedHero : Hero;
  constructor() {}

  ngOnInit() {}
  
  onSelect(hero: Hero) {
     this.selectedHero = hero;
    console.log(this.selectedHero);
  }
  
}
