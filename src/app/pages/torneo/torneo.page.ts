import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.page.html',
  styleUrls: ['./torneo.page.scss'],
})
export class TorneoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ingreTorneo(){
    this.router.navigate(['ronda']);
  }

  volver(){
    this.router.navigate(['principal']);
  }

}
