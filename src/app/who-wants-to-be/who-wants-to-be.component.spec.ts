import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWantsToBeComponent } from './who-wants-to-be.component';

describe('WhoWantsToBeComponent', () => {
  let component: WhoWantsToBeComponent;
  let fixture: ComponentFixture<WhoWantsToBeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoWantsToBeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWantsToBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
