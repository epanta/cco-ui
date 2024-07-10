import {Component} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {DialogModule} from "primeng/dialog";
import {MatFormField} from "@angular/material/form-field";
import {Router} from "@angular/router";

@Component({
  selector: 'app-permissao-dialog',
  standalone: true,
  imports: [
    DialogModule,
    MatDialogContent,
    MatFormField,
    MatDialogActions,
  ],
  templateUrl: './permissao-dialog.component.html',
  styleUrl: './permissao-dialog.component.scss'
})
export class PermissaoDialogComponent {
  constructor(public dialogRef: MatDialogRef<PermissaoDialogComponent>, private router: Router) {}

  solicitarAcesso() {
    this.router.navigate(['/solicitacao-acesso']).then(r => {
    });
    this.dialogRef.close();
  }

  fecharDialogo(): void {
    this.dialogRef.close();
  }
}
