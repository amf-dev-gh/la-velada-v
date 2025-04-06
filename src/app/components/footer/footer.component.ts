import { Component } from '@angular/core';
import { SOCIALS } from '../../consts/social';
import { Social } from '../../types/social';
import { IconComponent } from "../icon/icon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [IconComponent, CommonModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  socials:Social[] = SOCIALS;
  textFooter:string = '© 2025 La Velada del Año. Todos los derechos reservados.'
}
