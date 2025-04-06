import { Component, Input } from '@angular/core';

@Component({
  selector: 'contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  @Input() type:string = '';
  @Input() value:number = 0;
  
}