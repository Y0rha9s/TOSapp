import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'torneo',
    loadChildren: () => import('./pages/torneo/torneo.module').then( m => m.TorneoPageModule)
  },
  {
    path: 'ronda',
    loadChildren: () => import('./pages/ronda/ronda.module').then( m => m.RondaPageModule)
  },
  {
    path: 'ingre-ronda',
    loadChildren: () => import('./pages/ingre-ronda/ingre-ronda.module').then( m => m.IngreRondaPageModule)
  },
  {
    path: 'baraja',
    loadChildren: () => import('./pages/baraja/baraja.module').then( m => m.BarajaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
