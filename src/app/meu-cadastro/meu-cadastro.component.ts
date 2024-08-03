import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {catchError, EMPTY, tap} from "rxjs";
import {PermissaoDialogComponent} from "../permissao-dialog/permissao-dialog.component";
import {UserService} from "../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {Router} from "@angular/router";
import {MatOption, MatSelect} from "@angular/material/select";
import {DropdownModule} from "primeng/dropdown";
import {NgForOf} from "@angular/common";
import {
  ConfirmacaoSolicitacaoDialogComponent
} from "../confirmacao-solicitacao-dialog/confirmacao-solicitacao-dialog.component";

@Component({
  selector: 'app-meu-cadastro',
  standalone: true,
  imports: [
    NavBarComponent,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    NavBarComponent,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatSelect,
    MatOption,
    MatCardActions,
    DropdownModule,
    NgForOf
  ],
  templateUrl: './meu-cadastro.component.html',
  styleUrl: './meu-cadastro.component.scss'
})
export class MeuCadastroComponent implements OnInit {
  form!: FormGroup;
  niveisDePermissao = [
    {label: 'Representante', value: 'Representante'},
    {label: 'Consulta', value: 'Consulta'}
  ];
  municipios = [
    {label: 'São Paulo', value: 'SAO PAULO'}
  ];

  constructor(private userService: UserService, private fb: FormBuilder,
              public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomeDoUsuario: ['', Validators.required],
      matricula: ['', Validators.required],
      login: ['', Validators.required],
      unidade: ['', Validators.required],
      centroDeCusto: ['', Validators.required],
      municipio: ['', Validators.required],
      nivelDePermissao: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      ramal: ['', Validators.required],
    });

    this.inativarForms();

  }

  inativarForms() {
    this.form.get('nomeDoUsuario')?.disable();
    this.form.get('matricula')?.disable();
    this.form.get('login')?.disable();
    this.form.get('unidade')?.disable();
    this.form.get('centroDeCusto')?.disable();
    this.form.get('municipio')?.disable();
    this.form.get('nivelDePermissao')?.disable();
    this.form.get('email')?.disable();
  }

  onUpdate() {
    const dialogRef = this.dialog.open(ConfirmacaoSolicitacaoDialogComponent, {
      width: '700px',
      height: '412px',
      data: this.form.value
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.atualizarDadosDoUsuario(this.form.value).pipe(
          tap(success => {
            console.log('Dados do usuário alterados com sucesso:', success);
          }),
          catchError(error => {
            console.error('Erro ao alterar dados do usuário:', error);
            this.dialog.open(PermissaoDialogComponent, {
              data: {message: 'Falha ao alterar dados do usuário. Tente novamente mais tarde.'}
            });
            return EMPTY;
          })
        ).subscribe();
      }
    });
    console.log('Dados do formulário:', this.form.value);
  }

  onLogin() {
    this.router.navigate(['/login']).then(r => {
    });
  }
}
