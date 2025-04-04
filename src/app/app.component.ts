import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { FIGHTERS } from './consts/fighters';
import { Fighters } from './types/fighters';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SponsorsComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  f: Fighters = FIGHTERS[0]
}
