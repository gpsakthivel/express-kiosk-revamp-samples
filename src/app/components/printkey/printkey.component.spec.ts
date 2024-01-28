import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintkeyComponent } from './printkey.component';

describe('PrintkeyComponent', () => {
  let component: PrintkeyComponent;
  let fixture: ComponentFixture<PrintkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintkeyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
