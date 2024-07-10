import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaComunicacaoInternaComponent } from './nova-comunicacao-interna.component';

describe('NovaComunicacaoInternaComponent', () => {
  let component: NovaComunicacaoInternaComponent;
  let fixture: ComponentFixture<NovaComunicacaoInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaComunicacaoInternaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovaComunicacaoInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
