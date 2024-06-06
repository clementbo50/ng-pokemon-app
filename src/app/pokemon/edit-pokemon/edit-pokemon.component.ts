import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { CommonModule, NgIf } from '@angular/common';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    PokemonFormComponent
  ],
  templateUrl: './edit-pokemon.component.html',
  styleUrl: './edit-pokemon.component.scss'
})
export class EditPokemonComponent implements OnInit {

  pokemon!: Pokemon|undefined;
  constructor(private router: ActivatedRoute, private PokemonService : PokemonService) { }

  ngOnInit(): void {

    const pokemonId: string|null = this.router.snapshot.paramMap.get('id');

    if(pokemonId){
      this.PokemonService.getPokemonById(+pokemonId).subscribe((pokemon) => this.pokemon = pokemon);
    }else{
      this.pokemon = undefined;
    }

  }

}
