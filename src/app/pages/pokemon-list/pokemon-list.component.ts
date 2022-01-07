import { Component, OnInit } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less']
})
export class PokemonListComponent implements OnInit {

  constructor(
    public service: PokemonListService
  ) {
  }

  ngOnInit(): void {
    this.service.init();
  }

}
