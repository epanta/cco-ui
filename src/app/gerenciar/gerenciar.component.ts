import { Component } from '@angular/core';
import { MunicipiosComponent } from "./municipios/municipios.component";
import { MatIcon } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { NgForOf, NgIf } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-gerenciar',
  standalone: true,
  imports: [
    MatIcon,
    MatPaginator,
    NgForOf,
    NgIf,
    MunicipiosComponent],
  templateUrl: './gerenciar.component.html',
  styleUrl: './gerenciar.component.scss'
})
export class GerenciarComponent {
  activeTab = 'municipios';
}
