import { CuisineModule } from './cuisine.module';

describe('CuisineModule', () => {
  let cuisineModule: CuisineModule;

  beforeEach(() => {
    cuisineModule = new CuisineModule();
  });

  it('should create an instance', () => {
    expect(cuisineModule).toBeTruthy();
  });
});
