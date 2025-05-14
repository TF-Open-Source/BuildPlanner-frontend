import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsInfoComponent } from './configurations-info.component';

describe('ConfigurationsInfoComponent', () => {
  let component: ConfigurationsInfoComponent;
  let fixture: ComponentFixture<ConfigurationsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
