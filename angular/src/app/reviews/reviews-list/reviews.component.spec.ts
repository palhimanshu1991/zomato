import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsListComponent } from './reviews-list.component';
import { ReviewService } from '../../services/review.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { of } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('ReviewsListComponent', () => {
  let component: ReviewsListComponent;
  let fixture: ComponentFixture<ReviewsListComponent>;
  let mockReviewService;
  let mockUserService;
  let mockLocation;
  let mockActivatedRoute;
  let reviews;

  beforeEach(() => {
    mockReviewService = jasmine.createSpyObj(['getReviewsList']);
    mockUserService = jasmine.createSpyObj(['userDetails']);
    mockLocation = jasmine.createSpyObj(['back']);
    reviews = [{ rating: 2, text: 'nice' }, { rating: 4, text: 'asdadas' }];
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '3';
          }

        }
      }
    };

    TestBed.configureTestingModule({
      declarations: [ReviewsListComponent],
      providers: [
        { provide: ReviewService, useValue: mockReviewService },
      {provide: UserService, useValue: mockUserService},
      {provide: Location, useValue: mockLocation},
      {provide: ActivatedRoute, useValue: mockActivatedRoute}
    ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ReviewsListComponent);
    component = fixture.componentInstance;
});
it('should display a list of reviews', () => {
     fixture.detectChanges();

});
});
