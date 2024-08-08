import { Component } from '@angular/core';
import { IncluirMunicipioComponent } from './incluir-municipio/incluir-municipio.component';
import { EditarMunicipioComponent } from './editar-municipio/editar-municipio.component';
import { CommonModule, NgForOf } from '@angular/common';
import {Router} from "@angular/router";
import {MunicipioService} from "../../services/municipio.service";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";
import { MunicipioData, Municipio } from '../../models/Municipio';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-municipios',
  standalone: true,
  imports: [
    NgForOf,
    MatIcon,
    MatButton,
    MatCardModule,
    MatPaginator,
    CommonModule,
    FormsModule
  ],
  templateUrl: './municipios.component.html',
  styleUrl: './municipios.component.scss'
})
export class MunicipiosComponent {
    constructor(private router: Router,
              private municipioService: MunicipioService,
              public dialog: MatDialog) {
  }
  totalElements = 50;
  size = 10;
  totalPages = 0;
  page = 0;
  municipio: Municipio[] = []
  municipioFilter: MunicipioData = {
    dataList: []
  }
  activeSearch= false;
  selectedValue: any;

  ngOnInit(): void {
    this.loadMunicipios(this.page, this.size)
  }
  private loadMunicipios(page: number, size: number) {
    this.municipioService.getMunicipiosCadastrados(page, size).subscribe(response => {
      this.municipio = response.content;
      this.totalElements = response.totalElements;
      this.totalPages = response.totalPages;
    });
  }

  openDialog() {
   const dialogRef = this.dialog.open(IncluirMunicipioComponent, {
      height: '350px',
      width: '750px',
    });

   dialogRef.afterClosed().subscribe(() => {
     this.loadMunicipios(this.page, this.size)   }
   )
  }

  openEditDialog(municipio: Municipio) {
    const dialogEditRef = this.dialog.open(EditarMunicipioComponent, {
      height: '350px',
      width: '750px',
      data : {
        item: municipio
      }
    });

    dialogEditRef.afterClosed().subscribe((result) => {
      this.loadMunicipios(this.page, this.size)   }
    )

  }

  deleteItem(id: number) {
    this.municipioService.deleteMunicipio(id).subscribe((result) => {
      this.loadMunicipios(this.page, this.size);
    });
  }

  onPageChange(event: any) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.loadMunicipios(this.page, this.size);
  }

  loadSearch(item: Municipio, active: boolean): void {
    this.activeSearch = true
    console.log("VALOR", this.selectedValue)

    this.municipioService.buscarPorNome(this.selectedValue).subscribe(response => {
      let data = response
      this.municipioFilter.dataList = data
      })
     console.log(this.municipioFilter);
    }
  }
