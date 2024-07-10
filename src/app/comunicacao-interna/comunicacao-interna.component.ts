import {Component, OnInit} from '@angular/core';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatIcon} from "@angular/material/icon";
import {MatPaginator} from "@angular/material/paginator";
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {CalendarModule} from "primeng/calendar";
import {Router} from "@angular/router";
import {ComunicacaoService} from "../services/comunicacao.service";

export interface ComunicacaoInterna {
  id: number;
  numeroFormulario: string;
  codigoTransferencia: string;
  dataEnvio: string;
  unidadeRemetente: string;
  situacao: string;
  ativo: boolean;
}

@Component({
  selector: 'app-comunicacao-interna',
  standalone: true,
  imports: [
    MatPaginator,
    NgForOf,
    NgIf,
    MatIcon,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatFormField,
    CalendarModule
  ],
  templateUrl: './comunicacao-interna.component.html',
  styleUrl: './comunicacao-interna.component.scss'
})
export class ComunicacaoInternaComponent implements OnInit{
  form: FormGroup;
  situacoes = [
    { value: 'rascunho', label: 'Rascunho' },
    { value: 'enviada', label: 'Enviada' }
  ];
  comunicacoes: ComunicacaoInterna[] = [];
  totalElements = 50;
  size = 10;
  totalPages = 0;
  page = 0;

  constructor(private fb: FormBuilder,  private router: Router,
              private comunicacaoService: ComunicacaoService) {
    this.form = this.fb.group({
      numeroFormulario: [''],
      dataEnvio: [''],
      situacao: ['']
    });
  }

  ngOnInit(): void {
    this.getComunicacoes(this.page, this.size)
  }

  getComunicacoes(page: number, size: number) {
    this.comunicacaoService.getComunicacao(page, size).subscribe(response => {
      this.comunicacoes = response.content;
      this.totalElements = response.totalElements;
      this.totalPages = response.totalPages;
    });
  }

  onPesquisar() {

  }

  onEditarComunicacao(id: number) {

  }

  onPageChange(event: any) {
  }

  onAdicionar() {
    this.router.navigate(['/nova-comunicacao-interna']);
  }

}
