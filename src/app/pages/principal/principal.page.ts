import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  usuario: string = '';
  contrasena: string = '';

  constructor(private router : Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation();

    if(extras?.extras.state){
      this.usuario = extras?.extras.state["usuarioLog"];
      this.contrasena = extras?.extras.state["contrasenaLog"];
    }

    
  }

  torneo(){
    this.router.navigate(['torneo']);
  }

  baraja(){
    this.router.navigate(['baraja']);
  }

  perfil(){
    this.router.navigate(['perfil']);
  }

  configuracion(){
    this.router.navigate(['configuracion']);
  }

  salir(){
    this.router.navigate(['login']);
  }

  volver(){
    this.router.navigate(['principal']);
  }

}
