import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {DialogModule} from "primeng/dialog";
import {MatFormField} from "@angular/material/form-field";
import {Router} from "@angular/router";
import {catchError, EMPTY, tap} from "rxjs";
import {PermissaoDialogComponent} from "../../permissao-dialog/permissao-dialog.component";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-mensagem-dialog',
  standalone: true,
  imports: [
    DialogModule,
    MatDialogContent,
    MatFormField,
    MatDialogActions,
  ],
  templateUrl: './visualizacao-notificacao-dialog.component.html',
  styleUrl: './visualizacao-notificacao-dialog.component.scss'
})
export class VisualizacaoNotificacaoDialogComponent {
  constructor(public dialogRef: MatDialogRef<VisualizacaoNotificacaoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  solicitarAcesso() {
    this.dialogRef.close(true);
  }

  fecharDialogo(): void {
    this.dialogRef.close(false);
  }
}
