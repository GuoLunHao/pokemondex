import { Component, OnInit } from '@angular/core';
import { MainClient } from 'pokenode-ts';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  async ngOnInit() {
    const api = new MainClient();
    const pokemons = await api.pokemon.getPokemonById(1);
    console.log(pokemons);

  }

}
