import { Component } from '@angular/core';
import { SPONSORS } from '../../consts/sponsors';
import { Sponsors } from '../../types/sponsors';

@Component({
  selector: 'app-sponsors',
  imports: [],
  templateUrl: './sponsors.component.html'
})
export class SponsorsComponent {

  firstRow:Sponsors[] = SPONSORS.slice(0,5)
  secondRow:Sponsors[] = SPONSORS.slice(5)


}
