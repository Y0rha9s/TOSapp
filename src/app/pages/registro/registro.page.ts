import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  usuario = {
    nombre: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  registrar() {
    this.authService.registro(this.usuario).subscribe(
      response => {
        if (response.success) {
          console.log('Registro exitoso');
          this.router.navigate(['/login']);
        } else {
          console.error('Error en el registro');
        }
      },
      error => {
        console.error('Error en la solicitud', error);
      }
    );
  }
}