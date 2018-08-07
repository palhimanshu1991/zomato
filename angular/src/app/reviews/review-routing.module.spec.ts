import { ReviewRoutingModule } from './review-routing.module';

describe('ReviewRoutingModule', () => {
  let reviewRoutingModule: ReviewRoutingModule;

  beforeEach(() => {
    reviewRoutingModule = new ReviewRoutingModule();
  });

  it('should create an instance', () => {
    expect(reviewRoutingModule).toBeTruthy();
  });
});
