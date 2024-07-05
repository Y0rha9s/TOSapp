import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  mdl_usuario: string = '';
  mdl_contrasena: string = '';

  constructor(private router: Router, private authService: AuthService) { }
  
  ngOnInit() {
    let extras = this.router.getCurrentNavigation();

    }


  ingresar() {
    this.authService.login(this.mdl_usuario, this.mdl_contrasena).subscribe(
      response => {
        if (response.success) {
          // Login exitoso
          this.router.navigate(['principal']);
        } else {
          // Mostrar mensaje de error
          console.error('Login fallido');
        }
      },
      error => {
        console.error('Error en la solicitud', error);
      }
    );
  }

  registrarse() {
    this.router.navigate(['registro']);
  }
}
