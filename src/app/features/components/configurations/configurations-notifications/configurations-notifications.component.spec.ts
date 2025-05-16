import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsNotificationsComponent } from './configurations-notifications.component';

describe('ConfigurationsNotificationsComponent', () => {
  let component: ConfigurationsNotificationsComponent;
  let fixture: ComponentFixture<ConfigurationsNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
