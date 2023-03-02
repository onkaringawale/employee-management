import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavjobsComponent } from './navjobs.component';

describe('NavjobsComponent', () => {
  let component: NavjobsComponent;
  let fixture: ComponentFixture<NavjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavjobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
