import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MashaComponent } from './masha.component';

describe('MashaComponent', () => {
  let component: MashaComponent;
  let fixture: ComponentFixture<MashaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MashaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MashaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
