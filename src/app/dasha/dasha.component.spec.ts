import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashaComponent } from './dasha.component';

describe('DashaComponent', () => {
  let component: DashaComponent;
  let fixture: ComponentFixture<DashaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
