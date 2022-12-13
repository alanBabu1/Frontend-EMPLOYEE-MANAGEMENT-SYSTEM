import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEmpComponent } from './navbar-emp.component';

describe('NavbarEmpComponent', () => {
  let component: NavbarEmpComponent;
  let fixture: ComponentFixture<NavbarEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
