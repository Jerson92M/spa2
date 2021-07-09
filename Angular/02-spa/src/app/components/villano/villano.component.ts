import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { VillanosService } from '../../servicios/villanos.service';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {

  villano: any = {}
  constructor(
    private _villanosService: VillanosService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.villano = this._villanosService.getVillano(params['id']);
    })
  }

}
