import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {NgForOf, NgIf} from "@angular/common";

export interface Hidrometro {
  numeroSerie: string;
  totalizacao: number;
  pde: string;
  osConecta: string;
  solicitante: string;
}

@Component({
  selector: 'app-nova-comunicacao-interna',
  standalone: true,
  imports: [
    CalendarModule,
    ReactiveFormsModule,
    DropdownModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './nova-comunicacao-interna.component.html',
  styleUrl: './nova-comunicacao-interna.component.scss'
})
export class NovaComunicacaoInternaComponent {
  form: FormGroup;
  solicitantes = [
    { value: 'ouvidoria', label: 'Ouvidoria' },
    { value: 'sabesp', label: 'SABESP' }
  ];
  hidrometros: Hidrometro[] = [];
  currentSection = 'transferencia';

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      codigoTransferencia: ['', Validators.required],
      numeroSerie: [''],
      totalizacao: [''],
      pde: [''],
      osConecta: [''],
      solicitante: [''],
      dataEnvio: ['']
    });
  }
  navigateToSection(section: string) {
    this.currentSection = section;
  }

  onInserirHidrometro() {
    const hidrometro: Hidrometro = {
      numeroSerie: this.form.value.numeroSerie,
      totalizacao: this.form.value.totalizacao,
      pde: this.form.value.pde,
      osConecta: this.form.value.osConecta,
      solicitante: this.form.value.solicitante
    };
    this.hidrometros.push(hidrometro);
    this.form.patchValue({ numeroSerie: '', totalizacao: '', pde: '', osConecta: '', solicitante: '' });
  }

  onRemoverHidrometro(hidrometro: Hidrometro) {
    this.hidrometros = this.hidrometros.filter(h => h !== hidrometro);
  }

  onCancelar() {
    this.router.navigate(['/comunicacao-interna']).then(success => {
      if (success) {
        console.log('Navigation successful!');
      } else {
        console.error('Navigation failed!');
      }
    });
  }

  onProximo() {
    if (this.currentSection === 'transferencia') {
      this.navigateToSection('hidrometros');
    } else if (this.currentSection === 'hidrometros') {
      this.navigateToSection('dadosEnvio');
    }
  }
}
