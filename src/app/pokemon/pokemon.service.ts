import { Injectable } from '@angular/core';
import { Pokemon } from './models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)), //console log de rxjs pour voir les réponses du serveur
      catchError((error) => this.handleError(error, []))

    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(

      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))

    )
  }

  private log(response: Pokemon[]| Pokemon| undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any|undefined) {
    console.log(error);
    return of(errorValue);
  }

  getPokemonsTypeList(): string[] {
   return['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Poison', 'Electric', 'Ground', 'Fairy', 'Fighting', 'Psychic', 'Rock', 'Ghost', 'Ice', 'Dragon'];
  }
}
