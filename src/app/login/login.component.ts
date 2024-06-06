import { AuthService } from './../auth.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  message: string = 'vous etes déconnecté, (admin/admin';
  name!:string;
  password!:string;
  auth!: AuthService;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage(){
    if(this.auth.isLoggedIn){
      this.message = 'Vous etes connecté';
    }else{
      this.message = 'Identifiants incorrects';
    }
  }

  login(){
    this.message= 'Tentative de connexion en cours...';
    this.auth.login(this.name, this.password)
    .subscribe((isLoggedIn: boolean) => {
      this.setMessage();
      if(isLoggedIn){
        this.router.navigate(['/pokemons']);
      }else{
        this.password = '';
        this.router.navigate(['/login']);
      }
 
    })
  }

  logout(){
    this.auth.logout();
    this.message = 'Vous etes déconnecté';
    this.router.navigate(['/login']);
  }

}
