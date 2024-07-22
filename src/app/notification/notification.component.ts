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

export interface NotificacaoCadastrada {
  id: number;
  msg: string;
  functionality: string;
  dateNotification: string;
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

  onExcluir(id: number, functionality:string) {

    var r=confirm('Deseja mesmo excluir a Funcionalidade ' + functionality);

    if(r==true){

      this.notificacaoService.alterarSituacao(id, false).pipe(
        tap(success => {
          console.log('Notificação Inativada com sucesso:', success);
        }),
        catchError(error => {
          console.error('Erro ao criar usuário:', error);
          return EMPTY;
        })
      ).subscribe();
    }
  }



}
