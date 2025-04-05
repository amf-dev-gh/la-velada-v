import { Component } from '@angular/core';
import { FIGHTERS } from '../../consts/fighters';
import { Fighter } from '../../types/fighters';
import { RouterLink } from '@angular/router';
import { FighterCardComponent } from '../fighter-card/fighter-card.component';

@Component({
  selector: 'app-hero',
  imports: [FighterCardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  fightersRow1:Fighter[] = FIGHTERS.slice(0,6);
  fightersRow2:Fighter[] = FIGHTERS.slice(6);

}
