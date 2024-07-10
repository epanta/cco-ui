import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivacaoDialogComponent } from './ativacao-dialog.component';

describe('PermissaoDialogComponent', () => {
  let component: AtivacaoDialogComponent;
  let fixture: ComponentFixture<AtivacaoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtivacaoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtivacaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
