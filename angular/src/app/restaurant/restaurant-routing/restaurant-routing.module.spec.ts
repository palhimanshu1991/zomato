import { RestaurantRoutingModule } from './restaurant-routing.module';

describe('RestaurantRoutingModule', () => {
  let restaurantRoutingModule: RestaurantRoutingModule;

  beforeEach(() => {
    restaurantRoutingModule = new RestaurantRoutingModule();
  });

  it('should create an instance', () => {
    expect(restaurantRoutingModule).toBeTruthy();
  });
});
