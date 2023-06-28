import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwscheduleComponent } from './veiwschedule.component';

describe('VeiwscheduleComponent', () => {
  let component: VeiwscheduleComponent;
  let fixture: ComponentFixture<VeiwscheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiwscheduleComponent]
    });
    fixture = TestBed.createComponent(VeiwscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
