import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe, NgStyle } from '@angular/common';
import { Router } from '@angular/router';
import { BorderCardDirective } from '../directives/border-card.directive';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color.pipe';
import { Pokemon } from '../models/pokemon';




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
  pokemonsList!: Pokemon[];
  pokemonSelected!: Pokemon|undefined;

  constructor(private router: Router, private pokemonService: PokemonService)  {
    /*const PokemonServices = new PokemonService(); Interdit */
  }

  ngOnInit(): void {
     this.pokemonService.getPokemonList().subscribe(pokemonList => this.pokemonsList = pokemonList);
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }

 
  

  
}
