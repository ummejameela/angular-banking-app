import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountFormComponent } from './customer-account-form.component';

describe('CustomerAccountFormComponent', () => {
  let component: CustomerAccountFormComponent;
  let fixture: ComponentFixture<CustomerAccountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAccountFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
