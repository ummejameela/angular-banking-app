import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationpanelComponent } from './navigationpanel.component';

describe('NavigationpanelComponent', () => {
  let component: NavigationpanelComponent;
  let fixture: ComponentFixture<NavigationpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationpanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
