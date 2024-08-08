import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { NotificacaoService } from '../services/notificacao.service';
import { NotificationConfigsComponent } from './notification-dialog/notification-configs.component';
import { NotificacaoForm } from '../models/NotificacaoForm';
import { tap, catchError, EMPTY } from 'rxjs';
import { VisualizacaoNotificacaoDialogComponent } from './visualizacao-notificacao-dialog/visualizacao-notificacao-dialog.component';

export interface NotificacaoCadastrada {
  id: number;
  mensagem:string;
  funcionalidade:string;
  dataHora:string;
  dataPlanilha:string;
  municipio:string;
  ultimoAjuste:string;
  operadorResponsavel:string;
  prazoAjuste:number;
  motivo:string;
  dataLiberacao:string;
  dataFinal:string;
  status: boolean;
}

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
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
    MatIcon,
    MatMenuModule,
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit {
  form: FormGroup;
  parametros: any[] = [];
  notificacoesCadastradas: NotificacaoForm[]= [];
  page = 0;
  size = 20;
  totalElements = 0;
  totalPages = 0;
  selectedParametroId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private notificacaoService: NotificacaoService,
    public dialog: MatDialog
  ) {
    this.form = this.fb.group({
      parametro: [''],
      selectedParametroId: [''],
    });
  }

  openDialog() {
    this.dialog.open(NotificationConfigsComponent, {
      height: '600px',
      width: '800px',
    });
  }

  ngOnInit(): void {
    this.listarNotificacoes(this.page, this.size)
  }


  listarNotificacoes(page: number, size: number) {
    this.notificacaoService.listarNotificacoes(page, size).subscribe(response => {
      this.notificacoesCadastradas = response.content;
      this.totalElements = response.totalElements;
      this.totalPages = response.totalPages;
    });
  }

  onPageChange(event: any) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
  }
  onStatusChange(opcao: NotificacaoCadastrada) {

  }

  onExcluir(id: number, funcionalidade: string) {

    var r=confirm('Deseja mesmo excluir o registro? ' + funcionalidade);

    if(r==true){

      this.notificacaoService.excluirNotificacao(id).subscribe({
        next: (success) => {
          console.log('Notificação excluída com sucesso:', success);
          this.notificacaoService.listarNotificacoes(this.page, this.size);
          this.listarNotificacoes(this.page, this.size);
        },
        error: (error) => {
          if(error.status == 200){
            this.notificacaoService.listarNotificacoes(this.page, this.size);
            this.listarNotificacoes(this.page, this.size);
            return
          }
          console.error('Erro ao excluir notificação:', error);
          return EMPTY;
        }
      });
    }
   
  }

  onVisualizar(notificacaoCadastrada: NotificacaoForm) {

    this.dialog.open(VisualizacaoNotificacaoDialogComponent, {
      height: '580px',
      width: '700px',
      data: notificacaoCadastrada
    });
  }

}
