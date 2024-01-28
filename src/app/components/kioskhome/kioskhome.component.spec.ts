import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskhomeComponent } from './kioskhome.component';

describe('KioskhomeComponent', () => {
  let component: KioskhomeComponent;
  let fixture: ComponentFixture<KioskhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KioskhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KioskhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
