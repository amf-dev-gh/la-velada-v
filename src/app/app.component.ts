import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SponsorsComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
