import { Component, Input } from '@angular/core';
import { NgxLiteYoutubeModule } from 'ngx-lite-video';

@Component({
  selector: 'workout-video',
  imports: [NgxLiteYoutubeModule],
  templateUrl: './workout.component.html'
})
export class WorkoutComponent {

  @Input() videoId:string = '';

}
