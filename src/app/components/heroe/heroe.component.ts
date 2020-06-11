import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  private heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private location: Location ) {
    activatedRoute.params.subscribe(params => {
      this.heroe = heroesService.getHeroe(params.id);
    });
  }

  ngOnInit(): void {
  }

  public goBack = () => this.location.back();

}
