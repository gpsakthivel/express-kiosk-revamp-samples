import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydeviceComponent } from './paydevice.component';

describe('PaydeviceComponent', () => {
  let component: PaydeviceComponent;
  let fixture: ComponentFixture<PaydeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaydeviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaydeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
