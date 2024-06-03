import { Injectable } from '@angular/core';
import { POKEMONS } from './models/pokemons-list';
import { Pokemon } from './models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonsTypeList(): string[] {
    return [...new Set(POKEMONS.map(pokemon => pokemon.types[0]))];
  }
}
