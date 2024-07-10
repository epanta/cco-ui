import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoDialogComponent } from './permissao-dialog.component';

describe('PermissaoDialogComponent', () => {
  let component: PermissaoDialogComponent;
  let fixture: ComponentFixture<PermissaoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissaoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermissaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
