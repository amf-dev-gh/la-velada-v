import { Component, OnInit } from '@angular/core';
import { ContadorComponent } from "./contador/contador.component";

@Component({
  selector: 'cuenta-atras',
  imports: [ContadorComponent],
  templateUrl: './cuenta-atras.component.html'
})
export class CuentaAtrasComponent implements OnInit {

  showCountDown:boolean = true;

  oficialDate: Date = new Date(1753560000000);
  
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(): void {
    this.calculateTimeLeft();
    setInterval(() => {
      this.calculateTimeLeft();
    }, 1000);
  }

  calculateTimeLeft(): void {
    const now = new Date().getTime();
    const timeDifference = this.oficialDate.getTime() - now;

    if (timeDifference <= 0) {
      this.days = this.hours = this.minutes = this.seconds = 0;
      this.showCountDown = false;
      return;
    }

    this.days = Math.floor(timeDifference / (1000 * 3600 * 24));
    this.hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
    this.minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
    this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  }

}
