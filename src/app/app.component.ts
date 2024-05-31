import { Component, OnInit} from '@angular/core';
import { POKEMONS } from './models/pokemons-list';
import { Pokemon } from './models/pokemon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
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
    }
  }
}
