import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavaboutusComponent } from './navaboutus.component';

describe('NavaboutusComponent', () => {
  let component: NavaboutusComponent;
  let fixture: ComponentFixture<NavaboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavaboutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
