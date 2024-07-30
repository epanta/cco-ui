import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import {
  FuncionalidadeNotificacao,
  PostData,
} from '../../models/FuncionalidadeNotificacao';

import { MatDialog } from '@angular/material/dialog';
import { NotificacaoServiceConfig } from '../../services/notificacao-config.service';

@Component({
  selector: 'app-notification-configs',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    NgIf,
    MatButtonModule,
    MatMenuModule,
    MatSlideToggleModule,
  ],
  templateUrl: './notification-configs.component.html',
  styleUrl: './notification-configs.component.scss',
})
export class NotificationConfigsComponent implements OnInit {
  notificacoesConfiguradas: FuncionalidadeNotificacao[] = [];
  notificacoesAlteradas: FuncionalidadeNotificacao[] = [];

  constructor(
    private router: Router,
    private notificacaoConfig: NotificacaoServiceConfig,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.notificacaoConfig
      .getNotificacoesConfiguradas()
      .subscribe((data: any[]) => {
        this.notificacoesConfiguradas = data;
      });
  }

  updateNotification(funcionality: FuncionalidadeNotificacao) {
    funcionality.notificationActive = !funcionality.notificationActive;
    if (this.notificacoesAlteradas.indexOf(funcionality) === -1) {
      this.notificacoesAlteradas.push(funcionality);
    }
  }

  registrarAlteracao() {
    let postData: PostData = {
      notificacaoConfigList: [...this.notificacoesAlteradas],
    };
    this.notificacaoConfig.alterarSituacao(postData);
  }

  cancelarAlteracao() {
    this.dialog.closeAll();
  }
}
