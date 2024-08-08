import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirMunicipioComponent } from './incluir-municipio.component';

describe('IncluirMunicipioComponent', () => {
  let component: IncluirMunicipioComponent;
  let fixture: ComponentFixture<IncluirMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncluirMunicipioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncluirMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
