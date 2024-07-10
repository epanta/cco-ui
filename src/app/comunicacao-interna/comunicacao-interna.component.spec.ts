import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacaoInternaComponent } from './comunicacao-interna.component';

describe('ComunicacaoInternaComponent', () => {
  let component: ComunicacaoInternaComponent;
  let fixture: ComponentFixture<ComunicacaoInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicacaoInternaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComunicacaoInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
