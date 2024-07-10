import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {catchError, EMPTY, tap} from "rxjs";
import {PermissaoDialogComponent} from "../permissao-dialog/permissao-dialog.component";
import {AuthService} from "../services/auth.service";
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
  selector: 'app-solicitacao-acesso',
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
  templateUrl: './solicitacao-acesso.component.html',
  styleUrl: './solicitacao-acesso.component.scss'
})
export class SolicitacaoAcessoComponent implements OnInit {
  form!: FormGroup;
  perfis = [
    {label: 'Representante', value: 'Representante'},
    {label: 'Consulta', value: 'Consulta'}
  ];
  estados = [
    {label: 'SP', value: 'SP'}
  ];
  cidades = [
    {label: 'São Paulo', value: 'SAO PAULO'}
  ];

  constructor(private authService: AuthService, private fb: FormBuilder,
              public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      matricula: ['', Validators.required],
      funcao: ['', Validators.required],
      unidade: ['', Validators.required],
      perfil: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cep: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      bairro: ['', Validators.required],
      logradouro: ['', Validators.required],
      complemento: ['']
    });
  }

  onCadastro() {
    const dialogRef = this.dialog.open(ConfirmacaoSolicitacaoDialogComponent, {
      width: '700px',
      height: '412px',
      data: this.form.value
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.createUsuarioSemPermissao(this.form.value).pipe(
          tap(success => {
            console.log('Usuário criado com sucesso:', success);
          }),
          catchError(error => {
            console.error('Erro ao criar usuário:', error);
            this.dialog.open(PermissaoDialogComponent, {
              data: {message: 'Falha ao criar usuário. Tente novamente mais tarde.'}
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
