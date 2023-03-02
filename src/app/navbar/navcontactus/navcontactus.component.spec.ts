import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcontactusComponent } from './navcontactus.component';

describe('NavcontactusComponent', () => {
  let component: NavcontactusComponent;
  let fixture: ComponentFixture<NavcontactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavcontactusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavcontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
