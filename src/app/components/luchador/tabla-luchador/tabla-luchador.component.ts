import { Component } from '@angular/core';
import { Fighter } from '../../../types/fighters';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from "../../icon/icon.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tabla-luchador',
  imports: [CommonModule, IconComponent, RouterLink],
  templateUrl: './tabla-luchador.component.html'
})
export class TablaLuchadorComponent {

  @Input() fighter:Fighter = {
    id: 'peereira',
    name: 'Peereira',
    realName: '',
    gender: 'masculino',
    birthDate: new Date,
    height: 0,
    age: 0,
    weight: 0,
    country: '',
    versus: null,
    socials: [],
    clips: []
  }

  dateToString(date:Date):string{
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

}
