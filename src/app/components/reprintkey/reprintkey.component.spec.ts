import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprintkeyComponent } from './reprintkey.component';

describe('ReprintkeyComponent', () => {
  let component: ReprintkeyComponent;
  let fixture: ComponentFixture<ReprintkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReprintkeyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReprintkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
