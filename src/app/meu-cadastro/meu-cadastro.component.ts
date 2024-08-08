import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from "@angular/material/card";
import { MatFormField } from "@angular/material/form-field";
import { catchError, EMPTY, tap } from "rxjs";
import { PermissaoDialogComponent } from "../permissao-dialog/permissao-dialog.component";
import { UserService } from "../services/user.service";
import { MatDialog } from "@angular/material/dialog";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { ActivatedRoute, Router } from "@angular/router";
import { MatOption, MatSelect } from "@angular/material/select";
import { DropdownModule } from "primeng/dropdown";
import { NgForOf } from "@angular/common";
import {
  ConfirmacaoSolicitacaoDialogComponent
} from "../confirmacao-solicitacao-dialog/confirmacao-solicitacao-dialog.component";
import { UsuarioForm } from '../models/UsuarioForm';

@Component({
  selector: 'app-meu-cadastro',
  standalone: true,
  imports: [
    NavBarComponent,
    FormsModule,
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
  usuarioId!: number;
  usuarioForm: any;
  usuario!: UsuarioForm;
  modelMunicipio: string | null = null;
  niveisDePermissao = [
    { label: 'Adminstrador', value: 'ADMIN' },
    { label: 'Consulta', value: 'Consulta' }
  ];
  municipios:any[]= [];
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.usuarioId = +(this.route.snapshot.paramMap.get('id') || 1);
    this.createForm();

    this.userService.buscarUsuario(this.usuarioId).subscribe(usuario => {
      this.usuario = usuario;
      this.usuarioForm.patchValue(this.usuario);
      this.atribuirMunicipio(usuario);
      console.log('Dados do usuário:', this.usuario);
    });
  }

  atribuirMunicipio(usuario: any) {
    let objectMunicipio = usuario.municipio;
    this.municipios.push(objectMunicipio);
    this.usuarioForm.get('municipio')?.setValue(this.municipios[0].nome);
    console.log('Dados do municipio:', this.municipios[0].nome);

  }

  createForm() {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      matricula: ['', Validators.required],
      login: ['', Validators.required],
      unidade: ['', Validators.required],
      centroDeCusto: ['', Validators.required],
      municipio: [''],
      nivelDePermissao: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      ramal: ['', Validators.required],
    });

    this.inativarForms();
  }

  inativarForms() {
    this.usuarioForm.get('nome')?.disable();
    this.usuarioForm.get('matricula')?.disable();
    this.usuarioForm.get('login')?.disable();
    this.usuarioForm.get('unidade')?.disable();
    this.usuarioForm.get('centroDeCusto')?.disable();
    this.usuarioForm.get('municipio')?.disable();
    this.usuarioForm.get('nivelDePermissao')?.disable();
    this.usuarioForm.get('email')?.disable();
  }

  onUpdate() {
    const dialogRef = this.dialog.open(ConfirmacaoSolicitacaoDialogComponent, {
      width: '700px',
      height: '412px',
      data: this.usuarioForm.value
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.atualizarDadosDoUsuario(this.usuarioForm.value).pipe(
          tap(success => {
            console.log('Dados do usuário alterados com sucesso:', success);
          }),
          catchError(error => {
            console.error('Erro ao alterar dados do usuário:', error);
            this.dialog.open(PermissaoDialogComponent, {
              data: { message: 'Falha ao alterar dados do usuário. Tente novamente mais tarde.' }
            });
            return EMPTY;
          })
        ).subscribe();
      }
    });
    console.log('Dados do formulário:', this.usuarioForm.value);
  }

  onLogin() {
    this.router.navigate(['/login']).then(r => {
    });
  }
}
