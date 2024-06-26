import { PokemonService } from './../pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../models/pokemon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color.pipe';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    PokemonTypeColorPipe,
    LoaderComponent
  ],
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.scss'
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  types!: string[];
  isAddForm!: boolean;

  constructor(
    private PokemonService: PokemonService,
    private router:Router
  ) { }
  ngOnInit(){
    this.types = this.PokemonService.getPokemonsTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string): boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event : Event, type: string){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.pokemon.types.push(type);
    }else{
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean{
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      
      return false;
    }
    
    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false
    }



    return true
  }

  onSubmit(){
    if(this.isAddForm){
      this.PokemonService.addPokemon(this.pokemon).subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemon', pokemon.id]));
    } else {
      this.PokemonService.updatePokemon(this.pokemon).subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
    }
    
  
    
  }
}
