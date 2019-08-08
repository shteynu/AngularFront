import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsraelCardComponent } from './israel-card.component';

describe('IsraelCardComponent', () => {
  let component: IsraelCardComponent;
  let fixture: ComponentFixture<IsraelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsraelCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsraelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
