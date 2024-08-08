import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoNotificacaoDialogComponent } from './visualizacao-notificacao-dialog.component'

describe('PermissaoDialogComponent', () => {
  let component: VisualizacaoNotificacaoDialogComponent;
  let fixture: ComponentFixture<VisualizacaoNotificacaoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizacaoNotificacaoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizacaoNotificacaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
