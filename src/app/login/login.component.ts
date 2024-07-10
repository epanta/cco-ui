import {Component} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf, NgOptimizedImage, NgStyle} from "@angular/common";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {PermissaoDialogComponent} from "../permissao-dialog/permissao-dialog.component";
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from "primeng/inputtext";
import {Router, RouterOutlet} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgOptimizedImage,
    ReactiveFormsModule, NgStyle, MatFormField,
    MatInput, MatButton, MatIcon, MatIconButton, PasswordModule, InputTextModule, NgIf, NgClass, MatSuffix, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [
    trigger('transform', [
      state('start', style({
        transform: 'scale(1)'
      })),
      state('end', style({
        transform: 'scale(1.5)'
      })),
      transition('start => end', animate('300ms ease-in'))
    ])
  ]
})
export class LoginComponent {
  senhaVisivel: boolean = false;
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private authService: AuthService, private fb: FormBuilder, public dialog: MatDialog,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onLogin() {
    if (this.loginForm?.valid) {
      const { username: matriculaEmail, password } = this.loginForm.value;
      this.authService.login(matriculaEmail, password).subscribe({
        next: async (success) => {
          console.log(success);
          if (success) {
            localStorage.setItem('chave', 'valor');
            await this.router.navigateByUrl('/home');
            console.log('Redirecionado com sucesso para a tela home!');
          } else {
            console.log('Falha no login, nenhum redirecionamento feito.');
          }
        },
        error: (error) => {
          console.error(error);
          this.dialog.open(PermissaoDialogComponent, {});
        }
      });
    } else {
      console.log('Formulário de login inválido.');
    }
  }

  toggleSenhaVisivel(): void {
    this.senhaVisivel = !this.senhaVisivel;
  }
}
