import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressEditComponent } from './user-address-edit.component';

describe('UserAddressEditComponent', () => {
  let component: UserAddressEditComponent;
  let fixture: ComponentFixture<UserAddressEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddressEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddressEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
