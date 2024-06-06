import { Pokemon } from './../models/pokemon';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe],
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.scss'
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>(); //Cela represente un flux de donnée dans le temps du champs de recherche de l'utilisateur
  pokemons$!: Observable<Pokemon[]>;
  

  constructor(private pokemonService: PokemonService, private router: Router) { }
  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      
      // attendre 300ms apres chaque frappe dans le champ de recherche pour eviter de prendre les requetes ou l'utilisateur est encore en train de taper
      debounceTime(300),
      // ignorer la recherche en cours si c'est la méme requête que la precedente 
      distinctUntilChanged(),
      //on envoie la requête au service
      switchMap((term: string) => this.pokemonService.searchPokemonList(term))

    );
    console.log(this.pokemons$);
  }

  //Méthode qui permet de recuperer les informations saisit par l'utilisateur et de les envoyer à la propriété searchTerms qui est un observable manipulable 
  search(term: string){
    this.searchTerms.next(term); //méthode next() est une méthode de pousser le résultat dans la propriété searchterms
  }

  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
