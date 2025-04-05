import { Routes } from '@angular/router';
import { LuchadorComponent } from './components/luchador/luchador.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CombateComponent } from './components/combates/combates.component';
import { LaPorraComponent } from './components/la-porra/la-porra.component';

export const routes: Routes = [
  {path:'luchador/:id', component:LuchadorComponent},
  {path:'la-porra', component:LaPorraComponent},
  {path:'combate/:id', component:CombateComponent},
  {path:'**', component:NotFoundComponent},
];
