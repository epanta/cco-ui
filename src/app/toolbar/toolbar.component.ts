import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {Router} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {MatFooterRow} from "@angular/material/table";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatToolbar,
    NgOptimizedImage,
    MatFooterRow
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit{
  userName: string | null = '';
  userAvatar: string | null = '';

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.userName = this.storageService.getItem('userName');
    this.userAvatar = this.storageService.getItem('userAvatar');
  }
}
