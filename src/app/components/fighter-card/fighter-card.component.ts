import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Fighter } from '../../types/fighters';

@Component({
  selector: 'app-fighter-card',
  imports: [RouterLink],
  templateUrl: './fighter-card.component.html',
  styleUrl: './fighter-card.component.css'
})
export class FighterCardComponent {

  @Input() fighter: Fighter= {
    id: 'peereira',
    name: 'Peereira',
    realName: '',
    gender: 'masculino',
    birthDate: new Date(),
    height: 0,
    age: 0,
    weight: 0,
    country: '',
    versus: 'peereira',
    socials: [],
    clips: []
  }

}
