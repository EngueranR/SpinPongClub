import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationTournamentsComponent } from './administration-tournaments.component';

describe('AdministrationTournamentsComponent', () => {
  let component: AdministrationTournamentsComponent;
  let fixture: ComponentFixture<AdministrationTournamentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationTournamentsComponent]
    });
    fixture = TestBed.createComponent(AdministrationTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
