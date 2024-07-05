import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ronda',
  templateUrl: './ronda.page.html',
  styleUrls: ['./ronda.page.scss'],
})
export class RondaPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  volver(){
    this.router.navigate(['principal']);
  }

}
