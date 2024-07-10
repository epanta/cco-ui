import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('transform', [
      state('start', style({
        transform: 'scale(1)'
      })),
      state('end', style({
        transform: 'scale(1.5)'
      })),
      transition('start => end', animate('300ms ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'cco-ui';
}
