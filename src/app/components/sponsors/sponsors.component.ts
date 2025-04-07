import { Component } from '@angular/core';
import { SPONSORS } from '../../consts/sponsors';
import { Sponsors } from '../../types/sponsors';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-sponsors',
  imports: [IconComponent],
  templateUrl: './sponsors.component.html'
})
export class SponsorsComponent {

  firstRow:Sponsors[] = SPONSORS.slice(0,5)
  secondRow:Sponsors[] = SPONSORS.slice(5)


}
