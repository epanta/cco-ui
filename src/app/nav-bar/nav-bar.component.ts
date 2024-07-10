import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatListSubheaderCssMatStyler, MatNavList} from "@angular/material/list";
import {MatIconButton} from "@angular/material/button";
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {NgIf} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatSidenavContent,
    RouterOutlet,
    MatToolbar,
    MatIcon,
    MatListSubheaderCssMatStyler,
    MatNavList,
    MatSidenavContainer,
    RouterLinkActive,
    RouterLink,
    MatListItem,
    MatSidenav,
    MatIconButton,
    ToolbarComponent,
    NgIf,
    FooterComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
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
export class NavBarComponent {
  isCollapsed = false;

  constructor(private cdr: ChangeDetectorRef) {}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.cdr.detectChanges();
  }
  openSubMenus: { [key: string]: boolean } = {};

  toggleSubMenu(menu: string) {
    this.openSubMenus[menu] = !this.openSubMenus[menu];
  }

  isSubMenuOpen(menu: string): boolean {
    return this.openSubMenus[menu] || false;
  }

}
