import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../servicios/heroes.service';

import { Heroe } from '../shared/interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(
    private _heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}