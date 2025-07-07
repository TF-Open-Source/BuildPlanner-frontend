import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsPolicyComponent } from './configurations-policy.component';

describe('ConfigurationsPolicyComponent', () => {
  let component: ConfigurationsPolicyComponent;
  let fixture: ComponentFixture<ConfigurationsPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
