import {Component} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {DialogModule} from "primeng/dialog";
import {MatFormField} from "@angular/material/form-field";
import {Router} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-permissao-dialog',
  standalone: true,
  imports: [
    DialogModule,
    MatDialogContent,
    MatFormField,
    MatDialogActions,
    MatIcon,
  ],
  templateUrl: './ativacao-dialog.component.html',
  styleUrl: './ativacao-dialog.component.scss'
})
export class AtivacaoDialogComponent {
  constructor(public dialogRef: MatDialogRef<AtivacaoDialogComponent>,
              private router: Router,
              private userService: UserService) {}

  confirmarAtivacao() {
    this.dialogRef.close(true);
  }

  fecharDialogo(): void {
    this.dialogRef.close(false);
  }
}
