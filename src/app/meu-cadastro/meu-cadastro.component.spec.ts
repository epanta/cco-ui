import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MeuCadastroComponent } from './meu-cadastro.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('MeuCadastroComponent', () => {
  let component: MeuCadastroComponent;
  let fixture: ComponentFixture<MeuCadastroComponent>;

  beforeEach(async () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    await TestBed.configureTestingModule({
      imports: [MeuCadastroComponent, HttpClientTestingModule ]
    })
    .compileComponents();
    
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    
    fixture = TestBed.createComponent(MeuCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
