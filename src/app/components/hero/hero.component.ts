import { Component } from '@angular/core';
import { FIGHTERS } from '../../consts/fighters';
import { Fighter } from '../../types/fighters';
import { RouterLink } from '@angular/router';
import { FighterCardComponent } from '../fighter-card/fighter-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [FighterCardComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  allFighters:Fighter[] = FIGHTERS;

  fightersFirstRow:Fighter[] = FIGHTERS.slice(0,6);

  leftFirtRow = this.fightersFirstRow.slice(0,3)
  rightFirtRow = this.fightersFirstRow.slice(3)

  fightersSecondRow:Fighter[] = FIGHTERS.slice(6);

  visibleFighter:string = '';
  showLanging:boolean = true;

  showFighter(fighterId:string){
    this.showLanging = false
    this.visibleFighter = fighterId;
  }

  showLandig(){
    this.showLanging = true
    this.visibleFighter = ''
  }

}
