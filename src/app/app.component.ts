import { BorderCardDirective } from './directives/border-card.directive';
import { Component, OnInit} from '@angular/core';
import { POKEMONS } from './models/pokemons-list';
import { Pokemon } from './models/pokemon';
import { DatePipe, NgStyle } from '@angular/common';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BorderCardDirective,
    DatePipe,
    PokemonTypeColorPipe,
    NgStyle
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected!: Pokemon|undefined;
  ngOnInit() {
    console.table(this.pokemonsList);
    
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
