import { Component, Input } from '@angular/core';
import { Combat } from '../../../types/Combat';

@Component({
  selector: 'app-card-combate',
  imports: [],
  templateUrl: './card-combate.component.html'
})
export class CardCombateComponent {

  @Input() fighters:string[] = []

}
