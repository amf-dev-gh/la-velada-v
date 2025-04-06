import { Component } from '@angular/core';
import { FIGHTERS } from '../../consts/fighters';
import { Fighter } from '../../types/fighters';
import { CommonModule } from '@angular/common';
import { COMBATS } from '../../consts/combats';
import { FighterCardComponent } from './fighter-card/fighter-card.component';
import { BackgroundComponent } from "../background/background.component";

@Component({
  selector: 'app-hero',
  imports: [FighterCardComponent, CommonModule, BackgroundComponent],
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  allFighters: Fighter[] = FIGHTERS;

  fightersFirstRow: Fighter[] = FIGHTERS.slice(0, 6);
  leftFirtRow = this.fightersFirstRow.slice(0, 3)
  rightFirtRow = this.fightersFirstRow.slice(3)
  fightersSecondRow: Fighter[] = FIGHTERS.slice(6);

  visibleFighter: string = '';
  showLanging: boolean = true;
  hoveredFighter: boolean = false;

  showFighter(fighterId: string) {
    this.showLanging = false
    this.visibleFighter = fighterId;
  }

  showLandig() {
    this.showLanging = true
    this.visibleFighter = ''
  }

  hovered(fighterId: string): string {
    if (this.visibleFighter === ''){
      return 'opacity-100 transition-all duration-300'
    }
    if (this.visibleFighter === fighterId || this.visibleFighter === this.oponent(fighterId)) {
      return 'opacity-100 duration-300 scale-115 transition-all'
    }
      return 'opacity-60 transition-all delay-100'
  }

  private oponent(fighterId:string):string{
    for(const combat of COMBATS) {
      if (combat.fighters[0] === fighterId) {
        return combat.fighters[1]
      }
      if (combat.fighters[1] === fighterId) {
        return combat.fighters[0]
      }
    };
    return fighterId
  }

}
