import { Component, OnInit } from '@angular/core';
import { BackgroundComponent } from "../background/background.component";
import { FIGHTERS } from '../../consts/fighters';
import { Fighter } from '../../types/fighters';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TablaLuchadorComponent } from "./tabla-luchador/tabla-luchador.component";
import { CommonModule } from '@angular/common';
import { COMBATS } from '../../consts/combats';

@Component({
  selector: 'app-luchador',
  imports: [BackgroundComponent, TablaLuchadorComponent, CommonModule, RouterLink],
  templateUrl: './luchador.component.html'
})
export class LuchadorComponent implements OnInit{

  fighter:Fighter = {
    id: 'peereira',
    name: 'Peereira',
    realName: '',
    gender: 'masculino',
    birthDate: new Date,
    height: 0,
    age: 0,
    weight: 0,
    country: '',
    versus: 'peereira',
    socials: [],
    clips: []
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Cargar el luchador inicialmente con el id
    this.getFighterid();

    // Detectar cambios en los parámetros de la URL
    this.route.paramMap.subscribe(params => {
      const fighterId = params.get('id');
      this.getFighter(fighterId);
    });
  }

  private getFighterid() {
    const fighterId = this.route.snapshot.paramMap.get('id');
    this.getFighter(fighterId);
  }

  private getFighter(fighterId: string | null) {
    if (!fighterId) {
      return;
    }
    
    for (const fighter of FIGHTERS) {
      if (fighter.id === fighterId) {
        this.fighter = fighter;
        return;
      }
    }
    this.router.navigate(['/not-found']);
  }
}