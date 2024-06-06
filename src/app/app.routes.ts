
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './pokemon/add-pokemon/add-pokemon.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    
    { path: 'pokemons', component: ListPokemonComponent,  canActivate: [AuthGuard]  },
    { path: 'pokemon/add', component: AddPokemonComponent,  canActivate: [AuthGuard]},
    { path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard] },
    { path: 'pokemon/edit/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },   
    { path: '**', component: PageNotFoundComponent }, // l'operateur ** récupère toutes les routes hors de celle au dessus !
];
