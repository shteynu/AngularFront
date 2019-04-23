import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedsquareComponent } from './redsquare.component';

describe('RedsquareComponent', () => {
  let component: RedsquareComponent;
  let fixture: ComponentFixture<RedsquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedsquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedsquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
