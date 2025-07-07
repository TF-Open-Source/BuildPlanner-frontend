import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsPrivacyComponent } from './configurations-privacy.component';

describe('ConfigurationsPrivacyComponent', () => {
  let component: ConfigurationsPrivacyComponent;
  let fixture: ComponentFixture<ConfigurationsPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsPrivacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
