import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RouterModule } from '@angular/router';
import {MatPaginator} from "@angular/material/paginator";
import {MatIcon} from "@angular/material/icon";
import {ParametroService} from "../services/parametro.service";

export interface OpcaoCadastrada {
  id: number;
  descritivo: string;
  status: boolean;
}

@Component({
  selector: 'app-parametros',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    ToggleButtonModule,
    RouterModule,
    FormsModule,
    MatPaginator,
    MatIcon
  ],
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss']
})
export class ParametrosComponent implements OnInit{
  form: FormGroup;
  parametros: any[] = [];
  opcoesCadastradas: any[] = [];
  page = 0;
  size = 20;
  totalElements = 0;
  totalPages = 0;
  selectedParametroId: number | null = null;

  constructor(private fb: FormBuilder, private parametroService: ParametroService) {
    this.form = this.fb.group({
      parametro: [''],
      selectedParametroId: ['']
    });
  }

  ngOnInit(): void {
    this.parametroService.getParametros().subscribe((data: any[]) => {
      this.parametros = data;
    });
  }

  onParametroChange(): void {
    if (this.selectedParametroId !== null) {
      this.parametroService.getOpcoesByParametroId(this.selectedParametroId).subscribe((data: any[]) => {
        this.opcoesCadastradas = data;
      });
    }
  }

  onPesquisar() {
    const id = this.form.get('selectedParametroId')?.value;
    if (id !== null) {
      this.parametroService.getOpcoesByParametroId(id).subscribe((data: any[]) => {
        this.opcoesCadastradas = data;
      });
    }
  }

  onAdicionar() {

  }

  onEditar(id: number) {

  }

  onStatusChange(opcao: OpcaoCadastrada) {

  }

  onPageChange(event: any) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
  }

}
