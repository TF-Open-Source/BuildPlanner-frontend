import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsTermsComponent } from './configurations-terms.component';

describe('ConfigurationsTermsComponent', () => {
  let component: ConfigurationsTermsComponent;
  let fixture: ComponentFixture<ConfigurationsTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsTermsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
