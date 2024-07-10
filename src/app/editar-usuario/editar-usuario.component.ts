import {Component, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {UsuarioForm} from "../models/UsuarioForm";

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  usuarioId!: number;
  usuario!: UsuarioForm;
  usuarioForm: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UserService
  ) {}

  ngOnInit(): void {
    this.usuarioId = +(this.route.snapshot.paramMap.get('id') || 0);
    this.createForm();

    this.usuarioService.buscarUsuario(this.usuarioId).subscribe(usuario => {
      this.usuario = usuario;
      this.usuarioForm.patchValue(this.usuario);
    });
  }

  createForm(): void {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      matricula: ['', Validators.required],
      funcao: ['', Validators.required],
      unidade: [''],
      perfil: ['', Validators.required],
      telefone: ['', Validators.required,  Validators.pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/)],
      email: ['', [Validators.required, Validators.email]],
      endereco: this.fb.group({
        cep: ['', Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)],
        estado: ['', Validators.required],
        cidade: ['', Validators.required],
        bairro: ['', Validators.required],
        logradouro: ['', Validators.required],
        complemento: ['']
      })
    });
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      this.usuarioService.atualizarUsuario(this.usuarioId, this.usuarioForm.value).subscribe(() => {
        this.router.navigate(['/gerenciar-usuarios']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/gerenciar-usuarios']);
  }
}
