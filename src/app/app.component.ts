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
  ngOnInit() {
    console.table(this.pokemonsList);
    this.selectPokemon(this.pokemonsList[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez choisi ${pokemon.name}`);
  }
}
