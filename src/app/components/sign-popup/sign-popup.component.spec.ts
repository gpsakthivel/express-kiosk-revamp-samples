import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignPopupComponent } from './sign-popup.component';

describe('SignPopupComponent', () => {
  let component: SignPopupComponent;
  let fixture: ComponentFixture<SignPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
