import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryInputsComponent } from './binary-inputs.component';

describe('BinaryInputsComponent', () => {
  let component: BinaryInputsComponent;
  let fixture: ComponentFixture<BinaryInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinaryInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
