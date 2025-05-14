import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsRegionComponent } from './configurations-region.component';

describe('ConfigurationsRegionComponent', () => {
  let component: ConfigurationsRegionComponent;
  let fixture: ComponentFixture<ConfigurationsRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsRegionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
