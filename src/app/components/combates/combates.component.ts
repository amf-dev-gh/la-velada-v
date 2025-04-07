import { Component } from '@angular/core';
import { BackgroundComponent } from "../background/background.component";
import { CardCombateComponent } from "./card-combate/card-combate.component";
import { COMBATS } from '../../consts/combats';
import { CommonModule } from '@angular/common';
import { Combat } from '../../types/Combat';

@Component({
  selector: 'app-combates',
  imports: [BackgroundComponent, CardCombateComponent, CommonModule],
  templateUrl: './combates.component.html',
  styleUrl: './combates.component.css'
})
export class CombateComponent {

  combats: Combat[] = COMBATS;

}
