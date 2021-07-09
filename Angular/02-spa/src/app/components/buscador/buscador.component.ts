import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../servicios/heroes.service';
import { VillanosService } from '../../servicios/villanos.service';
import { Heroe } from '../shared/interfaces/heroe.interface';
import { Villano } from '../shared/interfaces/villano.interface';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  villanos: Villano[] = [];
  termino: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _villanosService: VillanosService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
      this.villanos = this._villanosService.buscarVillanos(this.termino);
    })
  }

}
