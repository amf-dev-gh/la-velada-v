import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { FIGHTERS } from './consts/fighters';
import { Fighters } from './types/fighters';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SponsorsComponent, FooterComponent, HeroComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  f: Fighters = FIGHTERS[0]
}
