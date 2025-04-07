import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import {
  trigger, transition, style, animate, query, group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SponsorsComponent, FooterComponent, HeaderComponent],
  animations: [
    trigger('routeAnimations', [

      // Animación de inicio ➝ luchador
      transition('Inicio => Luchador', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            width: '100%',
            height: '100%',
          })
        ], { optional: true }),

        group([
          // Salida de inicio
          query(':leave', [
            animate('400ms ease-in', style({
              opacity: 0,
              transform: 'scale(1.1)'
            }))
          ], { optional: true }),

          // Entrada de luchador
          query(':enter', [
            style({ opacity: 0 }),
            animate('400ms 100ms ease-out', style({
              opacity: 1
            }))
          ], { optional: true }),
        ])
      ]),

      // Luchador → Inicio (efecto inverso)
      transition('Luchador => Inicio', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            width: '100%',
            height: '100%',
          })
        ], { optional: true }),

        group([
          query(':leave', [
            animate('400ms ease-in', style({
              opacity: 0,
              transform: 'scale(0.9)'
            }))
          ], { optional: true }),

          query(':enter', [
            style({ opacity: 0, transform: 'scale(1.05)' }),
            animate('400ms 100ms ease-out', style({
              opacity: 1,
              transform: 'scale(1)'
            }))
          ], { optional: true }),
        ])
      ]),

      // Por ahora, las demás rutas no tienen animaciones
      transition('* <=> *', [])
    ])
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

}
