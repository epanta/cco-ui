import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoAcessoComponent } from './solicitacao-acesso.component';

describe('SolicitacaoAcessoComponent', () => {
  let component: SolicitacaoAcessoComponent;
  let fixture: ComponentFixture<SolicitacaoAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoAcessoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitacaoAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
