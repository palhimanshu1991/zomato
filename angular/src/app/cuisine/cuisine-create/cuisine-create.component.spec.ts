import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineCreateComponent } from './cuisine-create.component';

describe('CuisineCreateComponent', () => {
  let component: CuisineCreateComponent;
  let fixture: ComponentFixture<CuisineCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuisineCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
