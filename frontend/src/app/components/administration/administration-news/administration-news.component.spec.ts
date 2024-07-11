import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationNewsComponent } from './administration-news.component';

describe('AdministrationNewsComponent', () => {
  let component: AdministrationNewsComponent;
  let fixture: ComponentFixture<AdministrationNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationNewsComponent]
    });
    fixture = TestBed.createComponent(AdministrationNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
