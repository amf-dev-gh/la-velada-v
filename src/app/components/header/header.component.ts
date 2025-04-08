import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from "../icon/icon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, IconComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuExpanded:boolean=false;

  showMenu(){
    this.menuExpanded = !this.menuExpanded;
  }

  closeMenu(){
    this.menuExpanded = false;
  }

}
