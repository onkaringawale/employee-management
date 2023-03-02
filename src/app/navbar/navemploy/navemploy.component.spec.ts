import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavemployComponent } from './navemploy.component';

describe('NavemployComponent', () => {
  let component: NavemployComponent;
  let fixture: ComponentFixture<NavemployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavemployComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavemployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
