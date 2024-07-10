import {Component, OnInit} from '@angular/core';
import {MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatNavList} from "@angular/material/list";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {ReactiveFormsModule} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {StorageService} from "../services/storage.service";

@Component({
  imports: [
    MatSidenavContent,
    MatSidenavContainer,
    MatNavList,
    MatToolbar,
    MatIcon,
    NavBarComponent,
    ReactiveFormsModule
  ],
  selector: 'app-home',
  standalone: true,
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
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
export class HomeComponent implements OnInit{
  userName: string | null = '';

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.userName = this.storageService.getItem('userName');
  }

}
