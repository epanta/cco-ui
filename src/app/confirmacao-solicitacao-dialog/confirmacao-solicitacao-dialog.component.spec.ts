import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoSolicitacaoDialogComponent } from './confirmacao-solicitacao-dialog.component';

describe('PermissaoDialogComponent', () => {
  let component: ConfirmacaoSolicitacaoDialogComponent;
  let fixture: ComponentFixture<ConfirmacaoSolicitacaoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoSolicitacaoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacaoSolicitacaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
