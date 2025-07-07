import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountContactComponent } from './account-contact.component';

describe('AccountContactComponent', () => {
  let component: AccountContactComponent;
  let fixture: ComponentFixture<AccountContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
