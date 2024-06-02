import { BorderCardDirective } from './../directives/border-card.directive';
import { Pokemon } from '../models/pokemon';
import { POKEMONS } from './../models/pokemons-list';
import { Component, OnInit } from '@angular/core';
import { DatePipe, NgStyle } from '@angular/common';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color.pipe';


@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    BorderCardDirective,
    DatePipe,
    PokemonTypeColorPipe,
    NgStyle
  ],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss'
})
export class ListPokemonComponent implements OnInit {
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected!: Pokemon|undefined;
  ngOnInit() {
    
    
  }

  selectedPokemon(pokemonId: string) {

    const pokemon: Pokemon|undefined = this.pokemonsList.find(pokemon => pokemon.id === +pokemonId);
    if(pokemon) {
      this.pokemonSelected = pokemon;
      console.log(`vous avez selectionne le pokemon ${this.pokemonSelected?.name}`);
    }else{
      console.log('Vous avez selectionne un pokemon qui n\'existe pas');
      this.pokemonSelected = pokemon;
    }
  }
}
