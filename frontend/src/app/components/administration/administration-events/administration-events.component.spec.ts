import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationEventsComponent } from './administration-events.component';

describe('AdministrationEventsComponent', () => {
  let component: AdministrationEventsComponent;
  let fixture: ComponentFixture<AdministrationEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationEventsComponent]
    });
    fixture = TestBed.createComponent(AdministrationEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
