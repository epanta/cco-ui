import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationConfigsComponent } from './notification-configs.component';

describe('NotificationConfigsComponent', () => {
  let component: NotificationConfigsComponent;
  let fixture: ComponentFixture<NotificationConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationConfigsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
