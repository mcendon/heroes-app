import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: Heroe;
  
  constructor() { }

  ngOnInit(): void {
  }

}
