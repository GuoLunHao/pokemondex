import { Injectable } from '@angular/core';
import {
  MainClient,
  NamedAPIResource,
  Pokemon,
} from 'pokenode-ts';
import { PromoService } from '../../services/promo.service';
@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  client: MainClient;
  constructor(
    private promoService: PromoService
  ) {
    this.client = new MainClient();
  }

  async init() {
    await this.initPokemonList();
  }
  pokemonList: Pokemon[] = [];

  async initPokemonList() {
    try {
      const nameList = await this.client.pokemon.listPokemons(0, 20);
      this.pokemonList = [];
      for (const name of nameList?.results) {
        const pokemon = await this.client.pokemon.getPokemonByName((name as NamedAPIResource)?.name);
        this.pokemonList.push(pokemon);
      }
    } catch (ex) {
      this.promoService.messageError(ex);
    }
  }

}
