import { Routes } from '@angular/router';
import { LuchadorComponent } from './components/luchador/luchador.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CombateComponent } from './components/combates/combates.component';
import { LaPorraComponent } from './components/la-porra/la-porra.component';
import { HeroComponent } from './components/hero/hero.component';

export const routes: Routes = [
  {path:'', component:HeroComponent},
  {path:'inicio', component:HeroComponent},
  {path:'luchador/:id', component:LuchadorComponent},
  {path:'luchador', redirectTo:''},
  {path:'la-porra', component:LaPorraComponent},
  {path:'combates', component:CombateComponent},
  {path:'not-found', component:NotFoundComponent},
  {path:'**', component:NotFoundComponent},
];
