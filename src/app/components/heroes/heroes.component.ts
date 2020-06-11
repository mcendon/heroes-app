import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  protected heroes: Heroe[] = [];
  protected buscar: string = null;
  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.buscar = params.buscar;
      if (params.buscar) {
        this.heroes = this.heroesService.buscarHeroes(params.buscar);
      } else {
        this.heroes = this.heroesService.getHeroes();
      }
    });
  }

}
