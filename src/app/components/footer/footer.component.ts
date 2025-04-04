import { Component } from '@angular/core';
import { SOCIALS } from '../../consts/social';
import { Social } from '../../types/social';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  socials:Social[] = SOCIALS;
  foot:string = '© 2025 La Velada del Año. Todos los derechos reservados.'
}
