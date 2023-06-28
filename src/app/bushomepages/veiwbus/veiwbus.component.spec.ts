import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwbusComponent } from './veiwbus.component';

describe('VeiwbusComponent', () => {
  let component: VeiwbusComponent;
  let fixture: ComponentFixture<VeiwbusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiwbusComponent]
    });
    fixture = TestBed.createComponent(VeiwbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
