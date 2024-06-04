import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color.pipe';
import { Pokemon } from './../models/pokemon';
import { PokemonService } from '../pokemon.service';



@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [
    DatePipe,
    PokemonTypeColorPipe
  ],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.scss'
})
export class DetailPokemonComponent implements OnInit {

  pokemonList!: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
     private router: Router, 
     private pokemonService: PokemonService) {}

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId).subscribe((pokemon) => this.pokemon = pokemon);
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }
  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon/edit', pokemon.id]);
  }
}
