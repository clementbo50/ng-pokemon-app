import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../models/pokemons-list';
import { Pokemon } from '../models/pokemon';
@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.scss'
})
export class DetailPokemonComponent implements OnInit {

  pokemonList!: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonId){
      this.pokemon= this.pokemonList.find(pokemon => pokemon.id === +pokemonId);
    }
  }
}
